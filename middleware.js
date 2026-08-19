export const config = {
    matcher: ['/blog', '/blog/:path*'],
  };
  
  const SITE = 'https://gemebio.com';
  
  /**
   * 只把“slug 已改变”或“目标不在 Journal”的特殊页面放这里。
   *
   * 普通旧文章不需要写进来：
   * /blog/example
   * 会自动跳到
   * /blogs/journal/example
   */
  const redirects = {
    // 示例：
    // '/blog/old-slug':
    //   'https://gemebio.com/blogs/journal/new-slug',
  
    // 如果某篇文章实际在 Engineering：
    // '/blog/example':
    //   'https://gemebio.com/blogs/engineering/example',
  };
  
  function permanentRedirect(destination, sourceUrl) {
    const target = new URL(destination);
  
    /**
     * 保留 UTM、affiliate、Google Ads 等原始参数
     */
    sourceUrl.searchParams.forEach((value, key) => {
      target.searchParams.append(key, value);
    });
  
    return new Response(null, {
      status: 301,
      headers: {
        Location: target.toString(),
      },
    });
  }
  
  export default function middleware(request) {
    const url = new URL(request.url);
  
    let pathname = url.pathname;
  
    /**
     * 统一去掉末尾 /
     */
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
  
    /**
     * ------------------------------------------------
     * 1. 精确特殊映射优先
     * ------------------------------------------------
     */
    const mappedDestination = redirects[pathname];
  
    if (mappedDestination) {
      return permanentRedirect(mappedDestination, url);
    }
  
    /**
     * ------------------------------------------------
     * 2. 旧 Blog 首页
     *
     * /blog
     * →
     * /blogs/journal/
     * ------------------------------------------------
     */
    if (pathname === '/blog') {
      return permanentRedirect(
        `${SITE}/blogs/journal/`,
        url
      );
    }
  
    /**
     * ------------------------------------------------
     * 3. 旧分页
     *
     * /blog/page/2
     * /blog/page/3
     * /blog/page/5
     *
     * 统一进入 Journal 首页
     *
     * 不建议机械变成 Shopify 分页，因为旧分页内容
     * 与新 Shopify 当前分页内容并不一定对应。
     * ------------------------------------------------
     */
    if (/^\/blog\/page\/\d+$/.test(pathname)) {
      return permanentRedirect(
        `${SITE}/blogs/journal/`,
        url
      );
    }
  
    /**
     * ------------------------------------------------
     * 4. 旧标签页
     *
     * /blog/tags/composting
     * →
     * /blogs/journal/tagged/composting
     *
     * /blog/tags/composting/page/2
     * →
     * /blogs/journal/tagged/composting?page=2
     * ------------------------------------------------
     */
    const tagMatch = pathname.match(
      /^\/blog\/tags\/([^/]+)(?:\/page\/(\d+))?$/
    );
  
    if (tagMatch) {
      const tag = tagMatch[1];
      const page = tagMatch[2];
  
      const target = new URL(
        `${SITE}/blogs/journal/tagged/${tag}`
      );
  
      /**
       * 保留原 query parameters
       */
      url.searchParams.forEach((value, key) => {
        target.searchParams.append(key, value);
      });
  
      /**
       * 将旧 /page/2 转换成 Shopify ?page=2
       */
      if (page && page !== '1') {
        target.searchParams.set('page', page);
      }
  
      return new Response(null, {
        status: 301,
        headers: {
          Location: target.toString(),
        },
      });
    }
  
    /**
     * ------------------------------------------------
     * 5. 所有普通旧文章
     *
     * /blog/{slug}
     * →
     * /blogs/journal/{slug}
     * ------------------------------------------------
     */
    const articleMatch = pathname.match(
      /^\/blog\/([^/]+)$/
    );
  
    if (articleMatch) {
      const slug = articleMatch[1];
  
      return permanentRedirect(
        `${SITE}/blogs/journal/${slug}`,
        url
      );
    }
  
    /**
     * ------------------------------------------------
     * 6. 其他异常 /blog/* URL
     *
     * 不制造猜测路径，统一返回 Journal 首页。
     * ------------------------------------------------
     */
    return permanentRedirect(
      `${SITE}/blogs/journal/`,
      url
    );
  }