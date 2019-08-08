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

<div class="item-list">
    <router-link :to="page.path" v-for="page of $site.pages.filter(item => item.path !== '/')" :key="page.key" class="item">
        {{page.title}}
        <br>
        ---
    </router-link>
</div>

<style>
    .item-list {
        margin: -5px;
        margin-bottom: 10px;
    }
    .item-list::after {
        content: "";
        clear: both;
        display: table;
    }
    .item-list .item {
        float: left;
        width: calc(25% - 10px);
        margin: 5px;
        background-color: #3eaf7c;
        color: #fff;
        border-radius: 6px;
        padding: 12px 16px;
        box-sizing: border-box;
    }
    @media screen and (max-width:768px) {
        .item-list .item {
            width: calc(50% - 10px);
        }
    }
</style>
