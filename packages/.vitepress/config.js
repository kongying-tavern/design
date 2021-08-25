// @ts-nocheck
require('esbuild-register')
const { currentVersion, versions } = require('../../meta/versions')

const Guide = [
  {
    text: 'Get Started',
    link: '/guide/index',
  },
  {
    text: 'Best Practice',
    link: '/guide/best-practice',
  },
  {
    text: 'Configurations',
    link: '/guide/config',
  },
  {
    text: 'Components',
    link: '/guide/components',
  },
  {
    text: 'Contributing',
    link: '/contributing',
  },
  {
    text: 'Guidelines',
    link: '/guidelines',
  },
]

const Packages = [
  {
    text: 'Normalize CSS',
    link: '/normalize.css/README',
  },
  {
    text: 'Prettier Config',
    link: '/prettier-config/README',
  },
]

const DefaultSideBar = [
  {
    text: 'Guide',
    children: Guide,
  },
  {
    text: 'Packages',
    children: Packages,
  },
  {
    text: 'Export Size',
    link: '/export-size',
  },
  {
    text: 'Recent Updated',
    link: '/recent-updated',
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: 'Ky Design',
  description: 'Collection of essential kongyingTavern Composition Utilities',
  lang: 'en-US',
  themeConfig: {
    repo: 'kongying-tavern/design',
    docsDir: 'packages',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      {
        text: 'Packages',
        link: '/packages',
        items: Packages,
      },
      {
        text: 'More',
        items: [
          {
            text: 'Ecosystem',
            link: '/ecosystem',
          },
          {
            text: 'Export Size',
            link: '/export-size',
          },
        ],
      },
      {
        text: `v${currentVersion}`,
        items: [
          {
            text: 'Release Notes',
            link: 'https://github.com/kongying-tavern/design/releases',
          },
          {
            text: "What's news",
            link: '/recent-updated',
          },
          ...versions.map((i) => {
            if (i.version === currentVersion) {
              return {
                text: `v${i.version} (Current)`,
                activeMatch: '/', // always active
                link: '/',
              }
            }
            return {
              text: `v${i.version}`,
              link: i.link,
            }
          }),
        ],
      },
    ],
    sidebar: {
      '/guide/': DefaultSideBar,
      '/contributing': DefaultSideBar,
      '/ecosystem': DefaultSideBar,
      '/guidelines': DefaultSideBar,
      '/export-size': DefaultSideBar,
      '/recent-updated': DefaultSideBar,
    },
    algolia: {
      apiKey: 'xxx',
      indexName: 'xxx',
    },
  },
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,user-scalable=0,viewport-fit=cover',
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content: 'The design system that powers Kongying Tavern',
      },
    ],
    [
      'meta',
      {
        name: 'renderer',
        content: 'webkit',
      },
    ],
    [
      'meta',
      {
        name: 'force-renderer',
        content: 'webkit',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'lack-translucent',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    [
      'meta',
      {
        name: 'applicable-device',
        content: 'pc,mobile',
      },
    ],
    [
      'meta',
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    [
      'meta',
      {
        name: 'google',
        content: 'notranslate',
      },
    ],
    [
      'meta',
      {
        name: 'origin',
        content: 'origin',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: 'https://yuanshen.site/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'JiaZeng',
      },
    ],
    [
      'link',
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.gstatic.com',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://fonts.gstatic.com',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
}

module.exports = config
