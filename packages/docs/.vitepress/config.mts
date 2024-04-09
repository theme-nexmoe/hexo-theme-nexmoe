import { defineConfig } from 'vitepress'
import { zhConfig } from './config/zh'

export default defineConfig({
  srcDir: 'src',
  appearance: false,
  locales: {
    root: {
      label: '中文简体',
      lang: 'zh-CN', // optional, will be added  as `lang` attribute on `html` tag
      ...zhConfig
    },
  },
  sitemap: {
    hostname: 'https://docs.nexmoe.com'
  },
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'hexo,nexmoe,theme,blog,beautiful,simple'
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: `/favicon.ico`
      }
    ],
    [
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-HG5GSWYXHL',
        async: 'true'
      }
    ],
    ['script', { src: '/gtag.js' }],
    [
      'script',
      {
        async: 'true',
        crossorigin: 'anonymous',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2058306854838448'
      }
    ]
  ],

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.search === false) return ''
          if (!env.relativePath.startsWith('v4.2')) return ''
          return html
        }
      }
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/nexmoe' },
      {
        icon: 'github',
        link: 'https://github.com/theme-nexmoe/hexo-theme-nexmoe'
      }
    ],

    editLink: {
      pattern:
        'https://github.com/theme-nexmoe/hexo-theme-nexmoe/edit/master/packages/docs/src/:path'
    }
  }
})
