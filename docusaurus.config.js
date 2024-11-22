// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GEME Blog - News & Stories",
  tagline: 'Introducing latest news in GEME, including products updates, industrial news, progress on microbiology technology. Newsletter for users and discount info for customers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.geme.bio',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // SEO scrip tags
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'GEME is a brand that aims to solve the world class food waste problem, and provide a better agricultural output',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "GEME",
        "alternateName": "GEME Composter",
        "legalName": "ROKH",
        "url": "https://www.geme.bio",
        "logo": "https://www.geme.bio/full-logo.png",
        "description": "GEME is a brand that aims to solve the world class food waste problem, and provide a better agricultural output.",
        "sameAs": [
          "https://twitter.com/geme_hi",
          "https://x.com/geme_hi",
          "https://www.facebook.com/hellogeme",
          "https://www.youtube.com/@geme_composter",
          "https://www.pinterest.com/geme_composter",
          "https://www.instagram.com/geme_composter",
          "https://www.tiktok.com/@geme.rokh",
          "https://www.linkedin.com/company/gemebyrokh"
        ],
        "email": "info@geme.bio",
        "contactPoint": {
          "contactType": "Customer Service",
          "email": "info@geme.bio",
          "telephone": "+32 479128278"
        },
        "vatID": "BE0719978144",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Boulevard Louis Schmidt 29",
          "addressLocality": "Brussels",
          "postalCode": "1040",
          "addressCountry": "Belgium"
        }
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "OnlineStore",
        "name": "GEME",
        "alternateName": "GEME Composter",
        "legalName": "ROKH",
        "url": "https://www.geme.bio",
        "logo": "https://www.geme.bio/full-logo.png",
        "description": "GEME is a brand that aims to solve the world class food waste problem, and provide a better argicultural output.",
        "sameAs": [
          "https://twitter.com/geme_hi",
          "https://x.com/geme_hi",
          "https://www.facebook.com/hellogeme",
          "https://www.youtube.com/@geme_composter",
          "https://www.pinterest.com/geme_composter",
          "https://www.instagram.com/geme_composter",
          "https://www.tiktok.com/@geme.rokh",
          "https://www.linkedin.com/company/gemebyrokh"
        ],
        "telephone": "+32 479128278",
        "email": "info@geme.bio",
        "contactPoint": {
          "contactType": "Customer Service",
          "email": "info@geme.bio",
          "telephone": "+32 479128278"
        },
        "vatID": "BE0719978144",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Boulevard Louis Schmidt 29",
          "addressLocality": "Brussels",
          "postalCode": "1040",
          "addressCountry": "Belgium"
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": [
            "US",
            "CA",
            "GB",
            "AT",
            "BE",
            "CZ",
            "DK",
            "EE",
            "FI",
            "FR",
            "DE",
            "GR",
            "HU",
            "IS",
            "IT",
            "LV",
            "LI",
            "LT",
            "LU",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "SK",
            "SI",
            "ES",
            "SE",
            "CH",
            "LI"
          ],
          "returnPolicyCountry": "BE",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 30,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn",
          "refundType": "https://schema.org/FullRefund"
        }
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "GEME",
        "url": "https://www.geme.bio",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.geme.bio/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }),
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'G-0SPG79H0VL',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'GTM-KB63TRW',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-KB63TRW',
        },
        // blog: {
        //   blogSidebarTitle: 'All posts',
        //   blogSidebarCount: 'ALL',
        //   showReadingTime: true,

        //   // math rendering plugins
        //   remarkPlugins: [remarkMath],
        //   rehypePlugins: [rehypeKatex],

        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/gemeofficial/gemedocs/tree/main/blog',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          ignorePatterns: [
            '/markdown-page',
            '/search',
            '/blog/page/**',
            '/blog/tags/**/page/**',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/geme-social-card.png',
      navbar: {
        // title: 'GEME',
        logo: {
          alt: 'GEME Logo',
          src: '/img/logo-text.png',
          href: 'https://www.geme.bio',
          target: '_self',
          width: 155,
          height: 32
        },
        items: [
          {
            position: 'left',
            label: 'Products',
            items: [
              {
                label: 'GEME Home Composter',
                to: 'https://www.geme.bio/product/geme',
                target: '_self',
              },
              {
                label: 'GEME Terra 2',
                to: 'https://www.geme.bio/geme-terra-2',
                target: '_self',
              },
              {
                label: 'GEME Kobold',
                to: 'https://www.geme.bio/geme-kobold',
                target: '_self',
              },
              {
                label: 'GEME Commercial Composters',
                // <p class="text-base font-medium text-gray-900">GEME Titans</p><p class="mt-1 text-sm text-gray-500">Commercial Composters</p>
                // html: '<p class="text-base font-medium text-gray-900">GEME Titans</p><p className="text-sm text-gray-500">Commercial Composters</p>',
                to: 'https://www.geme.bio/industrial-equipments',
                target: '_self',
              },
              {
                label: 'GEME Dots',
                // <p class="text-base font-medium text-gray-900">GEME Titans</p><p class="mt-1 text-sm text-gray-500">Commercial Composters</p>
                // html: '<p class="text-base font-medium text-gray-900">GEME Titans</p><p className="text-sm text-gray-500">Commercial Composters</p>',
                to: 'https://www.geme.bio/geme-dots',
                target: '_self',
              },
            ],
          },
          {
            position: 'left',
            label: 'Technologies',
            items: [
              {
                label: 'GK Resource Recycling',
                to: 'https://www.geme.bio/gk',
                target: '_self',
              },
              {
                label: 'Green City Network',
                to: 'https://www.geme.bio/green-city-networks',
                target: '_self',
              },
            ],
          },
          {
            position: 'left',
            to: '/',
            label: 'Help Center',
            // dropdownActiveClassDisabled: false,
            items: [
              {
                label: 'Tutorial',
                to: 'docs/get-started',
              },
              {
                label: 'FAQ',
                to: 'docs/category/faq',
              },
              {
                label: 'Shipping & Order',
                to: 'docs/orders-and-shipping',
              },
              {
                label: 'Warranty & Return',
                to: 'docs/warranty-and-return',
              },
              {
                label: 'Repair & Replace',
                to: 'docs/category/repair--replace',
              },
              {
                label: 'Customer Support',
                to: 'docs/customer-support',
              },

            ],
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Help Center',
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   dropdownItemsAfter: [
          //     {
          //       to: 'https://github.com/gemeofficial/geme-build-public',
          //       label: 'Help us translate',
          //     },
          //   ],
          // },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left',
          // },

          {
            position: 'left',
            label: 'More',
            items: [
              {
                label: 'Contact',
                to: 'https://www.geme.bio/contact',
                target: '_self',
              },
              {
                label: 'About',
                to: 'https://www.geme.bio/about',
                target: '_self',
              },
              {
                label: 'Media Kit',
                to: 'https://www.geme.bio/media-kit',
              },
              {
                label: 'News',
                to: 'https://www.geme.bio/news/',
                target: '_self',
              },
              {
                label: 'Blog',
                to: 'https://www.geme.bio/blog',
                target: '_self',
              },
              {
                label: 'Creative Hub',
                to: 'https://www.geme.bio/creative-hub',
                target: '_self',
              },
              {
                label: 'GEME Referral',
                to: 'https://www.geme.bio/geme-referral',
                target: '_self',
              },
              {
                label: 'Community',
                to: 'https://www.geme.bio/community',
                target: '_self',
              },
              {
                label: 'Affiliate ',
                to: 'http://www.shareasale.com/join/geme',
              },
              {
                label: 'Feedback',
                to: 'https://www.geme.bio/feedback',
                target: '_self',
              },
            ],
          },

          {
            type: 'search',
            position: 'right',
          },
          {
            to: 'https://www.geme.bio/product/geme',
            label: 'Buy GEME',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://www.geme.bio/how-it-works',
            label: 'How it works',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://www.facebook.com/groups/505437601497667',
            label: 'User Group',
            position: 'right',
          },
          {
            to: 'https://www.geme.bio/signup',
            label: 'Signup',
            position: 'right',
            target: '_self',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'GEME Logo',
          src: 'img/logo.png',
          href: 'https://www.geme.bio',
          target: '_self',
          width: 32,
          height: 32,
        },
        copyright: `Copyright © ${new Date().getFullYear()} ROKH SRL`,
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'GEME Composter',
                to: 'https://www.geme.bio/product/geme',
              },
              {
                label: 'GEME Terra 2',
                to: 'https://www.geme.bio/geme-terra-2',
              },
              {
                label: 'GEME Kobold',
                to: 'https://www.geme.bio/geme-kobold',
              },
              {
                label: 'GEME Commercial Composters',
                to: 'https://www.geme.bio/industrial-equipments',
              },
              {
                label: 'GEME Dots',
                to: 'https://www.geme.bio/geme-dots',
              },
            ],
          },
          {
            title: 'Help Center',
            items: [
              {
                label: 'Get Started',
                to: '/help-center/docs/get-started',
              },
              {
                label: 'FAQ',
                to: '/help-center/docs/category/faq',
              },
              {
                label: 'Manual',
                to: 'https://www.geme.bio/manual',
              },
              {
                label: 'Customer Support',
                to: '/help-center/docs/customer-support',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Contact Us',
                to: 'https://www.geme.bio/contact',
              },
              {
                label: 'Refer a friend',
                to: 'https://www.geme.bio/geme-referral',
              },
              {
                label: 'Creative Hub',
                to: 'https://www.geme.bio/creative-hub',
              },
              {
                label: 'Affiliate ',
                to: 'http://www.shareasale.com/join/geme',
              },
              {
                label: 'Suggestion & Feedback',
                to: 'https://www.geme.bio/feedback',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                to: 'https://www.geme.bio/about',
              },
              {
                label: 'Blog',
                to: 'https://www.geme.bio/blog',
              },
              {
                label: 'News',
                to: 'https://www.geme.bio/news',
              },
              {
                label: 'Community',
                to: 'https://www.geme.bio/community',
              },
              {
                label: 'Media Kit',
                to: 'https://www.geme.bio/media-kit',
              },
              {
                label: 'Business Cooperation',
                to: 'https://www.geme.bio/cooperation',
              },
            ],
          },
          {
            title: 'Compare',
            items: [
              {
                label: 'GEME vs Lomi',
                to: 'https://www.geme.bio/blog/lomi-vs-geme-composter',
                target: '_self',
              },
              {
                label: 'GEME vs Mill',
                to: 'https://www.geme.bio/blog/mill-vs-geme-composter',
                target: '_self',
              },
              {
                label: 'GEME vs Reencle',
                to: 'https://www.geme.bio/blog/reencle-vs-geme-composter',
                target: '_self',
              },
              {
                label: 'GEME vs Composting Pile',
                to: 'https://www.geme.bio/blog/traditional-composting-vs-geme-composter',
                target: '_self',
              },

            ],
          },
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
        defaultMode: 'light',
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
    }),

  plugins: [
    [
      './src/plugin/plugin-content-blog', // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: 'blog',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        showReadingTime: true,

        // math rendering plugins
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],

        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/gemeofficial/gemedocs/tree/main/blog',
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
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
        websiteID: "0b1b665a-0dd2-44f0-a4ac-e033cf76cc97", // Required
        analyticsDomain: "www.geme.bio", // Required
        scriptName: "assets/thirdparties/umami.js", // Optional
        // dataHostURL: "", // Optional
        dataAutoTrack: true, // Optional
        // dataDoNotTrack: true, // Optional
        dataCache: true, // Optional
        // dataDomains: "", // comma separated list of domains, *Recommended*
      }),
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  // file: {
  //   attributes: {
  //     poster:
  //       "https://docusaurus.io/img/undraw_react.svg",
  //   },
  // },
  // plugins: [tailwindPlugin], // update this
};

export default config;
