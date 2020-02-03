# 目录结构

以下为主题目录

```
│  font.php # 用于文档展示现有字体，不需要更改
│  _config.example.yml  # 默认配置文件
├─languages  # 语言配置目录     
│      default.yml
│      en.yml     
│      zh-CN.yml  
│      zh-HK.yml  
│      zh-TW.yml  
│
├─layout
│  │  archives.ejs
│  │  index.ejs   
│  │  layout.ejs  
│  │  post.ejs
│  │  py.ejs 
│  │         
│  ├─_partial
│  │  │  after-footer.ejs
│  │  │  analytics.ejs
│  │  │  comment.ejs  
│  │  │  copyright.ejs
│  │  │  header.ejs
│  │  │  paginator.ejs
│  │  │  sidebar.ejs
│  │  │  site-verification.ejs
│  │  │
│  │  ├─_analytics
│  │  │      baidu.ejs
│  │  │      cnzz.ejs
│  │  │      google.ejs
│  │  │      gtags.ejs
│  │  │      gtm-body.ejs
│  │  │      gtm-head.ejs
│  │  │      la.ejs
│  │  │      tencent.ejs
│  │  │
│  │  └─_comment
│  │          changyan.ejs
│  │          DiscussBot.ejs
│  │          disqus.ejs
│  │          disqusjs.ejs
│  │          gitalk.ejs
│  │          gitment.ejs
│  │          livere.ejs
│  │          valine.ejs
│  │
│  └─_widget
│          archive.ejs
│          category.ejs
│          recent_posts.ejs
│          social.ejs
│          tag.ejs
│          tagcloud.ejs
├─scripts
│  └─helper
│          css_auto_version.js
│          js_auto_version.js
│
├─source
│   ├─css
│   │      style.styl
│   │
│   └─js
│           app.js
│
└─WIKI # 文档目录
```
