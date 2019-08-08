---
home: true
heroImage: https://i.loli.net/2019/08/08/5ceZJrGxLk8Shug.png
heroText: Nexmoe
tagline: 🔥 一个比较特别的博客主题
actionText: 快速上手 →
actionLink: /hexo/zh/start.html
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: Made with ❤ by Nexmoe
---

    cd themes # 载入主题目录
    git clone https://github.com/nexmoe/hexo-theme-nexmoe.git nexmoe # 安装
    cd nexmoe # 进入 Nexmoe 主题目录
    npm i --save hexo-wordcount
    # Node 版本 7.6.0 之前,请安装 2.x 版本 (Node.js v7.6.0 and previous) 
    # npm install hexo-wordcount@2 --save
    cp -i _config.example.yml _config.yml
