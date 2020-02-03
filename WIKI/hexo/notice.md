# 注意事项

## 代码高亮

主题内置代码高亮且自动开启，为了避免冲突，请在 `站点配置文件` 中禁用 highlight

``` yaml
highlight:
  enable: false
```

## 使用 Git 管理 Hexo

正如在 开始 中所说，为了避免冲突，Nexmoe中只有 `_config.example.yml`，`主题配置文件` 需要将 `_config.example.yml` 复制一份并**重命名**为 `_config.yml`。

为了防止开发中 `_config.yml` 被推送进 Repo 中，我们将 `_config.yml` 写入了 `.gitignore`。这意味着在使用 Git 管理 Hexo 站点文件时，`主题配置文件` 并不会被 Push 到 Repo 中。此时你需要将 `_config.yml` 从 `.gitignore` 中**删除**，注意这有可能会造成使用 git pull 更新时造成冲突。

## 首页取文章概述

Hexo 在写作的时候（许多博客都是这样的），需要在文中添加 `<!--more-->` 则该标记之前的部分就会成为该文章的概述，显示在首页里。