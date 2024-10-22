// eslint-disable-next-line @typescript-eslint/no-var-requires
const blogPluginExports = require('@docusaurus/plugin-content-blog')
const { default: blogPlugin } = blogPluginExports

// 覆写@docusaurus/plugin-content-blog的contentLoaded方法，实现全局获取blog数据
// Ref https://github.com/kuizuo/blog/blob/main/src/plugin/plugin-content-blog/index.js
async function blogPluginEnhanced(context, options) {
  const blogPluginInstance = await blogPlugin(context, options)
  const { postsPerPage } = options

  return {
    ...blogPluginInstance,
    async contentLoaded({ content, allContent, actions }) {
      // Sort blog with sticky
      content.blogPosts.sort((a, b) => (b.metadata.frontMatter.sticky || 0) - (a.metadata.frontMatter.sticky || 0))

      // Group posts by postsPerPage
      const groupedPosts = Array.from({ length: Math.ceil(content.blogPosts.length / postsPerPage) }, (_, i) => ({
        items: content.blogPosts.slice(i * postsPerPage, (i + 1) * postsPerPage).map(post => post.id),
      }))

      // Update paginated blog list
      content.blogListPaginated.forEach((page, i) => {
        page.items = groupedPosts[i] ? groupedPosts[i].items : []
      })

      // Create default plugin pages
      await blogPluginInstance.contentLoaded({ content, allContent, actions })

      // Create your additional pages
      const { blogTags } = content
      const { setGlobalData } = actions

      setGlobalData({
        blogs: content.blogPosts,
        total: content.blogPosts.length,
        blogTags: blogTags,
      })
    },
  }
}

module.exports = Object.assign({}, blogPluginExports, {
  default: blogPluginEnhanced,
})