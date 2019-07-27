<div align="right">主目录: <a title="开始" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/start.md">开始</a> | <a title="评论系统" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/comment.md">评论系统</a> | 开始使用 | <a title="注意事项" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/notice.md">注意事项</a> | <a title="English" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/use.md">English</a></div>

# 开始使用

## 目录

- [创建文章](#%E5%88%9B%E5%BB%BA%E6%96%87%E7%AB%A0)
- [友情链接](#%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5)
- [图片灯箱](#%E5%9B%BE%E7%89%87%E7%81%AF%E7%AE%B1)
- [文章封面图](#%E6%96%87%E7%AB%A0%E5%B0%81%E9%9D%A2%E5%9B%BE)
- [统计系统](#%E7%BB%9F%E8%AE%A1%E7%B3%BB%E7%BB%9F)

## 创建文章

### 使用命令行
```
hexo new <title>
```
### 手动创建

在站点根目录的 `source/_posts` 目录下新建以 `.md` 为后缀的文件。

## 友情链接

### 创建页面
在站点根目录下的 `source` 文件夹内创建一个 `.md` 文件，文件名和路径根据个人喜好决定，会决定渲染生成以后页面的路径。

在文件中写入以下内容：
```
---
title: links
date:
layout: py
---
```
>title 可以更换为自己喜欢的标题

### 添加友链

在 `.md` 中直接添加以下内容即可
```
- [![标题](https://example.com/logo.png)](https://example.com/ "标题")
```
例如:
```
- [![轻惋导航](https://www.chainwon.com/static/logo.png)](https://www.chainwon.com/ "轻惋导航")
```
### [演示地址](https://nexmoe.com/PY.html)

## 图片灯箱

自动开启功能，为文章中每一个图片提供灯箱功能
![图片灯箱](https://nexmoe.com/images/pasted-4.png "图片灯箱")

## 文章封面图

在站点根目录下的 `source` 文件夹内创建一个 `.md` 文件，文件名和路径根据个人喜好决定，会决定渲染生成以后页面的路径。

在文件中写入以下内容：
```
---
title: Hello World
date: 2013/7/13 20:46:25
cover: https://i.loli.net/2019/07/21/5d33d5dc1531213134.png
---
```

##统计系统

### [Google](https://analytics.google.com)

登陆 Google Analytics 管理后台，找到你的站点 - 媒体资源设置，找到 `跟踪 ID`，一般是以 `UA-` 开头。
根据你想使用的方式，将 `跟踪 ID` 填写到 `google_site_id` 或 `gtags_site_id` 中。
**请注意: `gtags` 需要加载更大更多的文件。**

### CNZZ

登陆 CNZZ 后台，找到代码安装页面，应该会提供类似如下形式的代码：
```
<script src="//s95.cnzz.com/z_stat.php?id=<%= theme.analytics.cnzz_site_id %>&web_id={你的站点 ID}" language="JavaScript"></script>
```
把那一长串 ID 设置在 `cnzz_site_id` 中。

>脚本生成的内容会产生“站长统计”，Nexmoe已将其隐藏。

### [腾讯分析](http://ta.qq.com)

登录腾讯分析控制台，登录并获取分析的 ID，填入 `tencent_site_id` 中。