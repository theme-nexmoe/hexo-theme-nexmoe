import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const ogUrl = 'https://docs.nexmoe.com/'
const ogDescription = '🔥 A rather special Hexo theme'
const ogLogo = '/icon.svg'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'Hexo Theme Nexmoe',
  titleTemplate: '🔥 A rather special Hexo theme',
  description: ogDescription,
  head: [
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    nav: [
      {
        text: 'Quick Start',
        link: '/v4.0/',
        activeMatch: `^/v4.0/`
      },
      {
        text: 'Version',
        items: [
          {
            text: 'v4.0',
            link: '/v4.0/',
            activeMatch: `^/v4.0/`
          },
          {
            text: 'v3.2',
            link: '/v3.2/',
            activeMatch: `^/v3.2/`
          }
        ]
      }
    ],
    sidebar: {
      '/v4.0/': [
        {
          items: [
            {
              text: 'Quick Start',
              link: '/v4.0/'
            },
            {
              text: 'FAQ',
              link: '/v4.0/faq'
            }
          ]
        },
        {
          text: 'Theme Config',
          items: [
            {
              text: 'yml',
              link: '/v4.0/config/yml'
            },
            {
              text: 'Slot',
              link: '/v4.0/config/slot'
            },
            {
              text: 'Style',
              link: '/v4.0/config/style'
            }
            /*
            {
              text: 'Icon',
              link: '/v4.0/config/icon'
            },
            {
              text: 'Search',
              link: '/v4.0/config/search'
            }
            */
          ]
        },
        {
          text: 'Posts & Pages',
          items: [
            {
              text: 'Front-matter',
              link: '/v4.0/post/front-matter'
            },
            // {
            //   text: "Archive",
            //   link: "/v4.0/article/archive",
            // },
            // {
            //   text: "Cover",
            //   link: "/v4.0/article/cover",
            // },
            {
              text: 'Gallery',
              link: '/v4.0/post/gallery'
            },
            {
              text: 'Gallery Pro',
              link: '/v4.0/post/gallery_pro'
            },
            {
              text: 'Links',
              link: '/v4.0/post/links'
            }
          ]
        },
        {
          items: [
            {
              text: 'Contribution',
              link: '/v4.0/contribution'
            }
          ]
        }
      ]
    }
  }
}
