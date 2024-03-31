---
sidebar_position: 6
---

# RSS

## 安装 hexo-generator-feed

```shell
npm install hexo-generator-feed --save
```

## 修改配置 (`_config.nexmoe.yml`)

1. 侧边栏添加 RSS 订阅入口

    ```yaml
    RSS:
        - /atom.xml
        - icon-rss
        - rgb(235, 152, 0)
        - rgba(235, 152, 0, .15)  
    ```

    > 以上值仅供参考

2. 添加插件相关配置

    ```yaml
    # hexo generator feed
    feed:
    enable: true
    type: atom
    path: atom.xml
    limit: false
    hub:
    content:
    content_limit: 140
    content_limit_delim: ' '
    order_by: -date
    icon: 
    autodiscovery: true
    template: 
    ```

    > 以上各值的具体含义和作用请参考 [hexojs/hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)

:::info
如若在浏览器中预览时出现乱码问题，考虑使用 `https` 连接。

不管是否使用 https 连接，都不会影响正常的 RSS 效果。
:::
