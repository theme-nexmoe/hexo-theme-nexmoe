---
sidebar_position: 2
---

# 常见问题

## 语法突出显示

本主题不自动代码高亮处理，你需要手动安装语法高亮插件或是使用 Hexo 自带的。

### 方法1

参考我的方式使用 [Shiki](https://shiki.style/) 进行语法高亮：https://github.com/nexmoe/nexmoe.com/commit/0d1a87ad0addfdfb310111171af58bb7e7906d90

### 方法2

在根目录中编辑`_config.yml`以启用语法高亮显示。

```yaml
highlight:
  enable: true
  hljs: true
  auto_detect: true
  warp: true
```

查看更多信息：[Syntax Highlighting | Hexo](https://hexo.io/docs/syntax-highlight#Highlight-js)
