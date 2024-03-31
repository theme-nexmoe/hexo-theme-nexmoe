import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const ogUrl = 'https://docs.nexmoe.com/'
const ogDescription = '🔥 一个比较特别的 Hexo 主题'
const ogLogo = '/icon.svg'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'Hexo Theme Nexmoe',
  titleTemplate: '🔥 一个比较特别的 Hexo 主题',
  description: ogDescription,
  head: [
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    nav: [
      {
        text: '快速开始',
        link: '/v4.2/',
        activeMatch: `^/v4.2/`
      },
      {
        text: '版本',
        items: [
          {
            text: 'v4.2',
            link: '/v4.2/',
            activeMatch: `^/v4.2/`
          },
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
      '/v3.2/': [
        {
          items: [
            {
              text: '欢迎',
              link: '/v3.2/'
            },
            {
              text: '快速开始',
              link: '/v3.2/start'
            },
            {
              text: '常见问题',
              link: '/v3.2/faq'
            }
          ]
        },
        {
          text: '主题配置',
          items: [
            {
              text: '评论系统',
              link: '/v3.2/config/comment'
            },
            {
              text: '分析系统',
              link: '/v3.2/config/analysis'
            },
            {
              text: '图标',
              link: '/v3.2/config/icon'
            },
            {
              text: '搜索',
              link: '/v3.2/config/search'
            },
            {
              text: '样式与颜色',
              link: '/v3.2/config/style-color'
            }
          ]
        },
        {
          text: '文章页面',
          items: [
            {
              text: 'Front-matter',
              link: '/v3.2/article/front-matter'
            },
            {
              text: '归档页面',
              link: '/v3.2/article/archive'
            },
            {
              text: '文章封面图',
              link: '/v3.2/article/cover'
            },
            {
              text: '瀑布流图片',
              link: '/v3.2/article/gallery'
            },
            {
              text: '友情链接',
              link: '/v3.2/article/py'
            }
          ]
        },
        {
          text: 'Hexo 使用',
          items: [
            {
              text: '插入音乐',
              link: '/v3.2/hexo/aplayer'
            },
            {
              text: 'RSS',
              link: '/v3.2/hexo/rss'
            }
          ]
        },
        {
          items: [
            {
              text: '版本升级规范',
              link: '/v3.2/specification'
            },
            {
              text: '参与贡献',
              link: '/v3.2/contribution'
            },
            {
              text: '迁移至NPM版本',
              link: '/v3.2/migration'
            },
            {
              text: '遇到问题怎么办？',
              link: '/v3.2/question'
            }
          ]
        }
      ],
      '/v4.0/': [
        {
          items: [
            {
              text: '快速开始',
              link: '/v4.0/'
            },
            {
              text: '常见问题',
              link: '/v4.0/faq'
            }
          ]
        },
        {
          text: '主题配置',
          items: [
            {
              text: '配置文件',
              link: '/v4.0/config/yml'
            },
            {
              text: '插槽',
              link: '/v4.0/config/slot'
            },
            {
              text: '样式',
              link: '/v4.0/config/style'
            },
            {
              text: '图标',
              link: '/v4.0/config/icon'
            },
            {
              text: '搜索',
              link: '/v4.0/config/search'
            }
          ]
        },
        {
          text: 'Posts & Pages',
          items: [
            {
              text: 'Front-matter',
              link: '/v4.0/post/front-matter'
            },
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
            },
            {
              text: "归档",
              link: "/v4.0/post/archive",
            },
            {
              text: "封面",
              link: "/v4.0/post/cover",
            },
          ]
        },
        {
          items: [
            {
              text: '贡献',
              link: '/v4.0/contribution'
            },
            {
              text: '遇到问题怎么办？',
              link: '/v4.0/question'
            }
          ]
        }
      ],
      '/v4.2/': [
        {
          items: [
            {
              text: '快速开始',
              link: '/v4.2/'
            },
            {
              text: '常见问题',
              link: '/v4.2/faq'
            }
          ]
        },
        {
          text: '主题配置',
          items: [
            {
              text: '配置文件',
              link: '/v4.2/config/yml'
            },
            {
              text: '插槽（第三方集成）',
              link: '/v4.2/config/slot'
            },
            {
              text: '自定义样式',
              link: '/v4.2/config/style'
            },
            {
              text: '图标',
              link: '/v4.2/config/icon'
            },
            {
              text: '搜索',
              link: '/v4.2/config/search'
            }
          ]
        },
        {
          text: 'Posts & Pages',
          items: [
            {
              text: 'Front-matter',
              link: '/v4.2/post/front-matter'
            },
            {
              text: 'Gallery',
              link: '/v4.2/post/gallery'
            },
            {
              text: 'Gallery Pro',
              link: '/v4.2/post/gallery_pro'
            },
            {
              text: 'Links',
              link: '/v4.2/post/links'
            },
            {
              text: "归档",
              link: "/v4.2/post/archive",
            },
            {
              text: "封面",
              link: "/v4.2/post/cover",
            },
          ]
        },
        {
          items: [
            {
              text: '贡献',
              link: '/v4.2/contribution'
            },
            {
              text: '遇到问题怎么办？',
              link: '/v4.2/question'
            }
          ]
        }
      ]
    }
  }
}
