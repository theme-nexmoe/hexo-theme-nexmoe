module.exports = {
  title: 'Nexmoe 主题文档',
  description: 'Nexmoe 主题文档',
  base: '/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/zh/': {
      lang: 'zh-CN',
      title: 'Nexmoe 主题文档',
      description: 'Nexmoe 主题文档'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Nexmoe theme docs',
      description: 'Nexmoe theme docs'
    },
  },
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'nexmoe/hexo-theme-nexmoe',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'nexmoe/hexo-theme-nexmoe',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'WIKI',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    lastUpdated: '最后编辑',
    nav: [{
      text: 'Hexo',
      link: '/zh/hexo/'
    }, ],
    sidebar: 'auto',
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: {
          '/zh/hexo/comment': [{
              title: '评论系统',
              collapsable: false,
            },
          ],
          '/zh/hexo/notice': [{
              title: '注意事项',
              collapsable: false,
            },
          ],
          '/zh/hexo/use': [{
              title: '开始使用',
              collapsable: false,
            },
          ],
        },
      }
    }
  },
}