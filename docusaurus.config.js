// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GEME Composter - Help Center & Knowledge Base",
  tagline: 'Get Started Tutorial, Manual, FAQ, Troubleshooting and Customer Support',
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
          trackingID: 'G-0SPG79H0VL',
          anonymizeIP: true,
        },
        // docs: {
        //   sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/gemeofficial/gemedocs/tree/main/docs',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gemeofficial/gemedocs/tree/main/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'GEME',
        logo: {
          alt: 'GEME Logo',
          src: '/img/logo-text.png',
          href: 'https://www.geme.bio',
          target: '_self',
        },
        items: [
          {
            position: 'left',
            label: 'Products',
            items: [
              {
                label: 'GEME Home Composter',
                href: 'https://www.geme.bio/product/geme',
              },
              {
                label: 'GEME Kobold',
                href: 'https://www.geme.bio/geme-kobold',
              },
              {
                label: 'GEME Industrial Composters',
                href: 'https://www.geme.bio/industrial-equipments',
              },
            ],
          },
          {
            position: 'left',
            label: 'Technologies',
            items: [
              {
                label: 'GK Resource Recycling',
                href: 'https://www.geme.bio/gk',
              },
              {
                label: 'Green City Network',
                href: 'https://www.geme.bio/green-city-networks',
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
                to: 'https://www.geme.bio/help-center/docs/get-started',
              },
              {
                label: 'FAQ',
                to: 'https://www.geme.bio/help-center/docs/category/faq',
              },
              {
                label: 'Shipping & Order',
                to: 'https://www.geme.bio/help-center/docs/orders-and-shipping',
              },
              {
                label: 'Warranty & Return',
                to: 'https://www.geme.bio/help-center/docs/warranty-and-return',
              },
              {
                label: 'Repair & Replace',
                to: 'https://www.geme.bio/help-center/docs/category/repair--replace',
              },
              {
                label: 'Customer Support',
                to: 'https://www.geme.bio/help-center/docs/customer-support',
              },

            ],
          },


          {
            position: 'left',
            label: 'More',
            items: [
              {
                label: 'Contact',
                to: 'https://www.geme.bio/contact',
              },
              {
                label: 'About',
                to: 'https://www.geme.bio/about',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Community',
                to: 'https://www.geme.bio/community',
              },
              {
                label: 'Feedback',
                to: 'https://www.geme.bio/feedback',
              },
            ],
          },

          {
            type: 'search',
            position: 'right',
          },
          {
            href: '#',
            label: 'Discord Community',
            position: 'right',
          },
          {
            href: 'https://www.geme.bio/signup',
            label: 'Signup',
            position: 'right',
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
                label: 'GEME Kobold',
                to: 'https://www.geme.bio/geme-kobold',
              },
              {
                label: 'GEME Commercial Composters',
                to: 'https://www.geme.bio/industrial-equipments',
              },
            ],
          },
          {
            title: 'Help Center',
            items: [
              {
                label: 'Get Started',
                to: 'https://www.geme.bio/help-center/docs/get-started',
              },
              {
                label: 'FAQ',
                to: 'https://www.geme.bio/help-center/docs/category/faq',
              },
              {
                label: 'Manual',
                to: 'https://www.geme.bio/manual',
              },
              {
                label: 'Customer Support',
                to: 'https://www.geme.bio/help-center/docs/customer-support',
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
                label: 'Business Cooperation',
                to: 'https://www.geme.bio/cooperation',
              },
              // {
              //   label: 'Affiliate Plan',
              //   to: 'https://www.geme.bio/coming-soon',
              // },
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
                label: 'Community',
                to: 'https://www.geme.bio/community',
              },
            ],
          },
          // {
          //   title: 'Compare',
          //   items: [
          //     {
          //       label: 'GEME vs Reencle',
          //       to: '#',
          //     },
          //     {
          //       label: 'GEME vs Lomi',
          //       to: '#',
          //     },
          //     {
          //       label: 'GEME vs Mill',
          //       to: '#',
          //     },
          //     {
          //       label: 'GEME Composter vs Compost Tumbler',
          //       to: '#',
          //     },
          //     {
          //       label: 'GEME Kobold vs EM Starter',
          //       to: '#',
          //     },
          //   ],
          // },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
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

  // file: {
  //   attributes: {
  //     poster:
  //       "https://docusaurus.io/img/undraw_react.svg",
  //   },
  // },
  // plugins: [tailwindPlugin], // update this
};

export default config;
