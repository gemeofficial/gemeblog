// @ts-check
// `@type` JSDoc 注释允许编辑器自动补全和类型检查
// （与 `@ts-check` 配合使用时）。
// 有多种等效的方法来声明您的 Docusaurus 配置。
// 参见：https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // 添加这个
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: " ", // meta title 小尾巴
  titleDelimiter: " ", // meta title分隔符
  tagline:
    "Introducing latest news in GEME, including products updates, industrial news, progress on microbiology technology. Newsletter for users and discount info for customers",
  favicon: "img/favicon.ico",

  // 在此处设置您的网站的生产 URL
  url: "https://www.gemebio.com",
  // 设置您的网站在其下提供服务的 /<baseUrl>/ 路径名
  // 对于 GitHub 页面部署，通常是 '/<projectName>/'
  baseUrl: "/",

  // GitHub 页面部署配置。
  // 如果您不使用 GitHub 页面，则不需要这些。
  organizationName: "facebook", // 通常是您的 GitHub 组织/用户名。
  projectName: "docusaurus", // 通常是您的仓库名称。

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // SEO 脚本标签
  headTags: [
    // {
    //   tagName: 'script',
    //   attributes: {
    //     type: 'application/ld+json',
    //   },
    //   innerHTML: JSON.stringify({
    //     "@context": "https://schema.org",
    //     "@type": "Organization",
    //     "name": "GEME",
    //     "alternateName": "GEME Composter",
    //     "legalName": "ROKH",
    //     "url": "https://www.gemebio.com",
    //     "logo": "https://www.geme.bio/full-logo.png",
    //     "description": "GEME is a brand that aims to solve the world class food waste problem, and provide a better agricultural output.",
    //     "sameAs": [
    //       "https://twitter.com/geme_hi",
    //       "https://x.com/geme_hi",
    //       "https://www.facebook.com/hellogeme",
    //       "https://www.youtube.com/@geme_composter",
    //       "https://www.pinterest.com/geme_composter",
    //       "https://www.instagram.com/geme_composter",
    //       "https://www.tiktok.com/@geme.rokh",
    //       "https://www.linkedin.com/company/gemebyrokh"
    //     ],
    //     "email": "info@geme.bio",
    //     "contactPoint": {
    //       "contactType": "Customer Service",
    //       "email": "info@geme.bio",
    //       "telephone": "+32 479128278"
    //     },
    //     "vatID": "BE0719978144",
    //     "address": {
    //       "@type": "PostalAddress",
    //       "streetAddress": "Boulevard Louis Schmidt 29",
    //       "addressLocality": "Brussels",
    //       "postalCode": "1040",
    //       "addressCountry": "Belgium"
    //     }
    //   }),
    // },
    // {
    //   tagName: 'script',
    //   attributes: {
    //     type: 'application/ld+json',
    //   },
    //   innerHTML: JSON.stringify({
    //     "@context": "https://schema.org",
    //     "@type": "OnlineStore",
    //     "name": "GEME",
    //     "alternateName": "GEME Composter",
    //     "legalName": "ROKH",
    //     "url": "https://www.gemebio.com",
    //     "logo": "https://www.geme.bio/full-logo.png",
    //     "description": "GEME is a brand that aims to solve the world class food waste problem, and provide a better argicultural output.",
    //     "sameAs": [
    //       "https://twitter.com/geme_hi",
    //       "https://x.com/geme_hi",
    //       "https://www.facebook.com/hellogeme",
    //       "https://www.youtube.com/@geme_composter",
    //       "https://www.pinterest.com/geme_composter",
    //       "https://www.instagram.com/geme_composter",
    //       "https://www.tiktok.com/@geme.rokh",
    //       "https://www.linkedin.com/company/gemebyrokh"
    //     ],
    //     "telephone": "+32 479128278",
    //     "email": "info@gemebio.com",
    //     "contactPoint": {
    //       "contactType": "Customer Service",
    //       "email": "info@gemebio.com",
    //       "telephone": "+32 479128278"
    //     },
    //     "vatID": "BE0719978144",
    //     "address": {
    //       "@type": "PostalAddress",
    //       "streetAddress": "Boulevard Louis Schmidt 29",
    //       "addressLocality": "Brussels",
    //       "postalCode": "1040",
    //       "addressCountry": "Belgium"
    //     },
    //     "hasMerchantReturnPolicy": {
    //       "@type": "MerchantReturnPolicy",
    //       "applicableCountry": [
    //         "US",
    //         "CA",
    //         "GB",
    //         "AT",
    //         "BE",
    //         "CZ",
    //         "DK",
    //         "EE",
    //         "FI",
    //         "FR",
    //         "DE",
    //         "GR",
    //         "HU",
    //         "IS",
    //         "IT",
    //         "LV",
    //         "LI",
    //         "LT",
    //         "LU",
    //         "MT",
    //         "NL",
    //         "NO",
    //         "PL",
    //         "PT",
    //         "SK",
    //         "SI",
    //         "ES",
    //         "SE",
    //         "CH",
    //         "LI"
    //       ],
    //       "returnPolicyCountry": "BE",
    //       "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    //       "merchantReturnDays": 30,
    //       "returnMethod": "https://schema.org/ReturnByMail",
    //       "returnFees": "https://schema.org/FreeReturn",
    //       "refundType": "https://schema.org/FullRefund"
    //     }
    //   }),
    // },
    // {
    //   tagName: 'script',
    //   attributes: {
    //     type: 'application/ld+json',
    //   },
    //   innerHTML: JSON.stringify({
    //     "@context": "https://schema.org",
    //     "@type": "WebSite",
    //     "name": "GEME",
    //     "url": "https://www.gemebio.com",
    //     "potentialAction": {
    //       "@type": "SearchAction",
    //       "target": {
    //         "@type": "EntryPoint",
    //         "urlTemplate": "https://www.gemebio.com/search?q={search_term_string}"
    //       },
    //       "query-input": "required name=search_term_string"
    //     }
    //   }),
    // },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // googleAnalytics: {
        //   trackingID: 'G-0SPG79H0VL',
        //   anonymizeIP: false,
        // },
        // gtag: {
        //   trackingID: 'GTM-KB63TRW',
        //   anonymizeIP: false,
        // },
        gtag: {
          trackingID: "G-0SPG79H0VL",
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: "GTM-KB63TRW",
        },
        // blog: {
        //   blogSidebarTitle: 'All posts',
        //   blogSidebarCount: 'ALL',
        //   showReadingTime: true,

        //   // 数学渲染插件
        //   remarkPlugins: [remarkMath],
        //   rehypePlugins: [rehypeKatex],

        //   // 请将此更改为您的仓库。
        //   // 删除此项以移除"编辑此页面"链接。
        //   editUrl:
        //     'https://github.com/gemeofficial/gemedocs/tree/main/blog',
        // },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          ignorePatterns: [
            "/markdown-page",
            "/search",
            "/blog/page/**",
            "/blog/tags/**/page/**",
          ],
          lastmod: "datetime", // 将使用 frontmatter.date（如博客）作为 <lastmod> 来源
          priority: 0.8,
          changefreq: "daily",

          // Note: 经测试，调整createSitemapItems内的changefreq和priority似乎无效，或许跟if条件判断错误有关。
          // 但目前需求是所有blog都使用daily + 0.8，所以直接跳转顶层属性一键配置即可。后续有blog sitemap定制需求，在研究createSitemapItems
          createSitemapItems: async params => {
            const { defaultCreateSitemapItems, ...rest } = params;

            // 获取默认生成的 sitemap items
            const items = await defaultCreateSitemapItems(rest);

            return (
              items
                // 排除分页页，如 /blog/page/2
                .filter(item => !item.url.includes("/page/"))
                // 为每个条目赋予定制值
                .map(item => {
                  // 特殊处理 blog 文章（排除 blog 首页）
                  if (item.url.startsWith("/blog/") && item.url !== "/blog") {
                    return {
                      ...item,
                      changefreq: "daily",
                      priority: 0.8,
                    };
                  }

                  // 其他页面使用默认设置
                  return item;
                })
            );
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为您项目的社交卡片
      image: "img/geme-social-card.png",
      navbar: {
        // title: 'GEME',
        logo: {
          alt: "GEME Logo",
          src: "/img/logo-text.png",
          href: "https://www.gemebio.com",
          target: "_self",
          width: 155,
          height: 32,
        },
        items: [
          {
            position: "left",
            label: "Products",
            items: [
              {
                label: "GEME Home Composter",
                to: "https://www.gemebio.com/products/geme",
                target: "_self",
              },
              {
                label: "GEME Terra 2",
                to: "https://www.gemebio.com/products/geme-terra-2",
                target: "_self",
              },
              {
                label: "GEME Kobold",
                to: "https://www.gemebio.com/products/kobold",
                target: "_self",
              },
              {
                label: "GEME Commercial Composters",
                to: "https://www.gemebio.com/pages/geme-titans",
                target: "_self",
              },
              {
                label: "GEME Dots",
                to: "https://www.geme.bio/geme-dots",
                target: "_self",
              },
            ],
          },
          {
            position: "left",
            label: "Technologies",
            items: [
              {
                label: "GK Resource Recycling",
                to: "https://www.gemebio.com/pages/gk-technology",
                target: "_self",
              },
              {
                label: "Green City Network",
                to: "https://www.geme.bio/green-city-networks",
                target: "_self",
              },
            ],
          },
          {
            position: "left",
            to: "/",
            label: "Help Center",
            // dropdownActiveClassDisabled: false,
            items: [
              {
                label: "Tutorial",
                to: "https://www.gemebio.com/pages/geme-support",
                target: "_self",
              },
              {
                label: "FAQ",
                to: "https://www.gemebio.com/pages/geme-faq",
                target: "_self",
              },
              {
                label: "Shipping & Order",
                to: "https://www.gemebio.com/pages/geme-track",
                target: "_self",
              },
              {
                label: "Warranty & Return",
                to: "https://www.gemebio.com/pages/warranty",
                target: "_self",
              },
              {
                label: "Repair & Replace",
                to: "https://www.gemebio.com/pages/geme-servicehub",
                target: "_self",
              },
              {
                label: "Customer Support",
                to: "https://www.gemebio.com/pages/geme-contact",
                target: "_self",
              },
            ],
          },
          {
            position: "left",
            label: "More",
            items: [
              {
                label: "Contact",
                to: "https://www.gemebio.com/pages/geme-contact-sales",
                target: "_self",
              },
              {
                label: "About",
                to: "https://www.gemebio.com/pages/geme-about",
                target: "_self",
              },
              {
                label: "Media Kit",
                to: "https://www.gemebio.com/pages/geme-press-room",
              },
              {
                label: "News",
                to: "/news/",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Creative Hub",
                to: "https://www.gemebio.com/pages/community",
                target: "_self",
              },
              {
                label: "GEME Referral",
                to: "https://www.geme.bio/geme-referral",
                target: "_self",
              },
              {
                label: "Community",
                to: "https://www.gemebio.com/pages/community",
                target: "_self",
              },
              {
                label: "Affiliate ",
                to: "https://affiliate.gemebio.com/",
              },
              {
                label: "Feedback",
                to: "https://www.gemebio.com/policies/contact-information",
                target: "_self",
              },
            ],
          },

          {
            type: "search",
            position: "right",
          },
          {
            to: "https://www.gemebio.com/products/geme",
            label: "Buy GEME",
            position: "right",
            target: "_self",
          },
          {
            to: "https://www.gemebio.com/pages/how-it-works",
            label: "How it works",
            position: "right",
            target: "_self",
          },
          {
            to: "https://www.facebook.com/groups/505437601497667",
            label: "User Group",
            position: "right",
          },
          {
            to: "https://www.geme.bio/signup",
            label: "Signup",
            position: "right",
            target: "_self",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "GEME Logo",
          src: "img/logo.png",
          href: "https://www.gemebio.com",
          target: "_self",
          width: 32,
          height: 32,
        },
        copyright: `Copyright © ${new Date().getFullYear()} ROKH SRL`,
        links: [
          {
            title: "Products",
            items: [
              {
                label: "GEME Composter",
                to: "https://www.gemebio.com/products/geme",
              },
              {
                label: "GEME Terra 2",
                to: "https://www.gemebio.com/products/terra2",
              },
              {
                label: "GEME Kobold",
                to: "https://www.gemebio.com/products/kobold",
              },
              {
                label: "GEME Commercial Composters",
                to: "https://www.gemebio.com/pages/geme-titans",
              },
              {
                label: "GEME Dots",
                to: "https://www.geme.bio/geme-dots",
              },
            ],
          },
          {
            title: "Help Center",
            items: [
              {
                label: "Get Started",
                to: "https://www.gemebio.com/pages/geme-support",
              },
              {
                label: "FAQ",
                to: "https://www.gemebio.com/pages/geme-faq",
              },
              {
                label: "Manual",
                to: "https://gemebio.com/pages/geme-manual",
              },
              {
                label: "Customer Support",
                to: "https://www.gemebio.com/pages/geme-contact",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Contact Us",
                to: "https://www.gemebio.com/pages/geme-contact",
              },
              {
                label: "Refer a friend",
                to: "https://www.geme.bio/geme-referral",
              },
              {
                label: "Creative Hub",
                to: "https://gemebio.com/pages/community",
              },
              {
                label: "Affiliate ",
                to: "https://affiliate.gemebio.com/",
              },
              {
                label: "Suggestion & Feedback",
                to: "https://gemebio.com/policies/contact-information",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About",
                to: "https://gemebio.com/pages/geme-about",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "News",
                to: "/news/",
              },
              {
                label: "Community",
                to: "https://gemebio.com/pages/community",
              },
              {
                label: "Media Kit",
                to: "https://gemebio.com/pages/geme-press-room",
              },
              {
                label: "Business Cooperation",
                to: "https://gemebio.com/pages/geme-contact-sales",
              },
            ],
          },
          // {
          //   title: 'Compare',
          //   items: [
          //     {
          //       label: 'GEME vs Lomi',
          //       to: '/blog/lomi-vs-geme-composter',
          //       target: '_self',
          //     },
          //     {
          //       label: 'GEME vs Mill',
          //       to: '/blog/mill-vs-geme-composter',
          //       target: '_self',
          //     },
          //     {
          //       label: 'GEME vs Reencle',
          //       to: '/blog/reencle-vs-geme-composter',
          //       target: '_self',
          //     },
          //     {
          //       label: 'GEME vs Composting Pile',
          //       to: '/blog/traditional-composting-vs-geme-composter',
          //       target: '_self',
          //     },
          //     // {
          //     //   label: 'GEME Kobold vs EM Starter',
          //     //   to: '#',
          //     // },
          //   ],
          // },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'IFA Berlin 2024 Sale, <a rel="noopener noreferrer" href="https://www.geme.bio/product/geme?discount-code=IFABerlin">$150</a> OFF',
      //   backgroundColor: '#3B7F6F',
      //   textColor: '#FFFFFF',
      //   isCloseable: false,
      // },
      algolia: {
        // Algolia 提供的应用程序 ID
        appId: "7UN4KF34XB",

        // 公共 API 密钥：提交它是安全的
        apiKey: "34de1f1b5d45846846f58c27b5aa96fd",

        indexName: "geme-blog-en",

        // 可选：请参阅下面的文档部分
        contextualSearch: true,

        // 可选：指定导航应通过 window.location 而不是 history.push 进行的域。 当我们的 Algolia 配置抓取多个文档站点时很有用，我们希望通过 window.location.href 导航到它们。
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // 可选：替换来自 Algolia 的项目 URL 的部分。 在使用不同 baseUrl 的多个部署中使用相同搜索索引时很有用。 您可以在 `from` 参数中使用正则表达式或字符串。 例如：localhost:3000 与 myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // 或作为正则表达式：/\/docs\//
        //   to: '/',
        // },

        // 可选：Algolia 搜索参数
        searchParameters: {},

        // 可选：默认启用的搜索页面路径（`false` 禁用它）
        searchPagePath: "search",

        // 可选：Docsearch 上是否启用 insights 功能（默认为 `false`）
        insights: false,

        //... 其他 Algolia 参数
      },
    }),

  plugins: [
    [
      "./src/plugin/plugin-content-blog", // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: "blog",
        blogSidebarTitle: "All posts",
        blogSidebarCount: "ALL",
        showReadingTime: true,

        // 要下架的文章文件夹 参数是目录名称
        exclude: [
          "**/2024-09-26-soilkind-vs-geme/**",
          "**/2024-09-29-lomi-vs-geme/**",
          "**/2024-09-30-mill-vs-geme/**",
          "**/2024-10-16-reencle-vs-geme/**",
          "**/2023-07-07-redefine-garbage-we-can-do-better/**",
          "**/2025-04-25-soil-water-climate-balance/**",
        ],

        // 数学渲染插件
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],

        // 请将此更改为您的仓库。
        // 删除此项以移除"编辑此页面"链接。
        // editUrl:
        //   'https://github.com/gemeofficial/gemedocs/tree/main/blog',
        readingTime: (
          /** @type {Parameters<NonNullable<import('@docusaurus/plugin-content-blog').Options['readingTime']>>[0]} */
          { content, frontMatter, defaultReadingTime, locale },
        ) =>
          defaultReadingTime({
            content,
            frontMatter,
            locale,
            options: { wordsPerMinute: 300 },
          }),
      },
    ],
    [
      "vercel-analytics",
      {
        debug: true,
        mode: "auto",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: ["/blog/how-long-do-blueberries-last-in-fridge"],
            to: "/blog/how-long-do-blueberries-last-in-the-fridge",
          },
          {
            from: ["/blog/top-5-composters-verdict-geme-lomi-mill-reencle-vitamix"],
            to: "/blog/top-5-kitchen-composters-2026-geme-lomi-mill-reencle-vitamix",
          },
          {
            from: ["/blog/how-long-can-cooked-chicken-last-in-the-fridge"],
            to: "/blog/how-long-can-cooked-chicken-stay-in-the-fridge",
          },
          {
            from: ["/blog/garden-soil-vs-compost-pros-and-cons"],
            to: "/blog/garden-soil-vs-compost",
          },
          {
            from: ["/blog/does-reencle-composter-produce-real-compost"],
            to: "/blog/reencle-vs-geme-terra-2-composter-2026",
          },
          {
            from: ["/blog/does-mill-composter-really-compost"],
            to: "/blog/does-mill-composter-really-compost-2026",
          },
          {
            from: ["/blog/electric-composter-guide-geme"],
            to: "/blog/how-does-a-real-electric-composter-work",
          },
          {
            from: ["/blog/the-best-electric-kitchen-composter-mill-composter-vs-geme-terra-2"],
            to: "/blog/geme-terra-2-vs-mill-composter-2026",
          },
          {
            from: ["/blog/when-compost-is-ready-to-use"],
            to: "/blog/when-is-compost-ready-to-use",
          },
          {
            from: ["/blog/what-an-e5-fault-actually-means-and-what-it-does-not"],
            to: "/blog/what-an-e5-fault-means-in-geme-terra-2-and-what-it-does-not",
          },
        ],
      },
    ],
    [
      "@gracefullight/docusaurus-plugin-microsoft-clarity",
      { projectId: "kse470k3uv" },
    ],
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      ({
        websiteID: "0b1b665a-0dd2-44f0-a4ac-e033cf76cc97", // 必需
        analyticsDomain: "www.geme.bio", // 必需
        scriptName: "assets/thirdparties/umami.js", // 可选
        // dataHostURL: "", // 可选
        dataAutoTrack: true, // 可选
        // dataDoNotTrack: true, // 可选
        dataCache: true, // 可选
        // dataDomains: "", // 逗号分隔的域列表，*推荐*
      }),
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // 添加 TailwindCSS 和 AutoPrefixer。
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  // themes: [
  //   [
  //     // require.resolve("@easyops-cn/docusaurus-search-local"),
  //     // /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  //     // ({
  //     //   // ... 您的选项。
  //     //   // 如果可能，建议将 `hashed` 设置为长期缓存索引文件。
  //     //   hashed: true,
  //     //   // 对于使用中文的文档，建议将 `language` 设置为：
  //     //   // ```
  //     //   // language: ["en", "zh"],
  //     //   // ```
  //     // }),
  //   ],
  // ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  // file: {
  //   attributes: {
  //     poster:
  //       "https://docusaurus.io/img/undraw_react.svg",
  //   },
  // },
  // plugins: [tailwindPlugin], // 更新此项

  // 添加自定义字段
  customFields: {},
};

export default config;
