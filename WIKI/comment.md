<div align="right">主目录: <a title="开始" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/start.md">开始</a> | 评论系统 | <a title="开始使用" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/use.md">开始使用</a> | <a title="注意事项" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/notice.md">注意事项</a> | <a title="English" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/comment.md">English</a></div>

# 评论系统

## 目录

- [开始](#%E4%BB%8B%E7%BB%8D)
- [Gitment](#Gitment)
- [Gitalk](#Gitalk)
- [Valine](#Valine)
- [Disqus](#Disqus)
- [搜狐畅言](#搜狐畅言)
- [来必力 livere](#%E6%9D%A5%E5%BF%85%E5%8A%9B%20livere)

## 开始

Nexmoe目前支持 6 种的评论系统，它们分别是 Gitment、Gitalk、Valine、DISQUS、搜狐畅言、来必力。

它们分别对应的键值是 `gitment` `gitalk` `valine` `disqus` `changyan` `livere`，将你想启用的评论系统的键值填写在 `comment` 中，然后找到对应评论系统的配置位置。

## [Gitment](https://github.com/imsun/gitment)

```
comment: gitment
......
gitment:
  owner: nexmoe # 持有该 repo 的 GitHub user
  repo: nexmoe.github.io # 存放评论的 issue 所在的 repo
  clientID:  # GitHub Client ID
  clientSecret:  # GitHub Client Secret
```
请仔细阅读Gitment的文档、教程，以知晓如何启用、填充上述参数。一般的，你需要 [创建一个新的 GitHub Application](https://github.com/settings/applications/new)

## [Gitalk](https://github.com/gitalk/gitalk)

```
comment: gitalk
......
gitalk:
  admin: nexmoe # 管理员 GitHub ID
  owner: nexmoe # 持有该 repo 的 GitHub user
  repo: nexmoe.github.io # 存放评论的 issue 所在的 repo
  clientID:  # GitHub Client ID
  clientSecret:  # GitHub Client Secret
```
请仔细阅读Gitalk的文档、教程，以知晓如何启用、填充上述参数。一般的，你需要 [创建一个新的 GitHub Application](https://github.com/settings/applications/new)

## [Valine](https://valine.js.org/)

```
comment: valine
......
valine: 
  appId: <API_ID> # leancloud application app id
  appKey: <API_Key> # leancloud application app key
```
请仔细阅读 [Valine 的文档](https://valine.js.org/) 以知晓如何启用、填充上述参数。一般的，你需要一个 `LeanCloud 的账号`。

## [Disqus](https://disqus.com)

```
comment: disqus
......
disqus:
  shortname: <shortname> # 你的 Disqus shortname
```
如果你不知道你的 `shortname` 是什么，请访问 Disqus 中你的站点的管理后台，此时你浏览器地址栏中的域名应形如是 `example.disqus.com`，`example` 就是你的 `shortname`。

## [搜狐畅言](http://changyan.kuaizhan.com/)

```
comment: changyan
......
changyan:
  appid: <APP_ID> # 畅言的 APPID
  conf: <CONF> # 畅言的 CONF
  thread_key_type: path # 可选 id 或 path
```
在畅言的后台找到安装方式，畅言应该提供了下述两个代码，你可以从其中找到你的 APPID 和 CONF：
```
!-- 畅言公共 js 代码 start -->
<script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId={这个就是你的 APPID}">
</script>
<!-- 畅言公共 js 代码 end -->
```
```
<script>
(function(){
var appid = '{这个就是你的 APPID}';
var conf = '{这个就是你的 CONF}';
var width = window.innerWidth || document.documentElement.clientWidth;
if (width < 960) {
window.document.write('<script id="changyan_mobile_js" charset="utf-8" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>'); } else { var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("https://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); } })();
</script>
```
请注意，搜狐畅言提供两种文章的区分方式，`id` 和 `path`（文章目录）。虽然在每次执行 `hexo g` 时每一篇文章都会被赋予一个 `page.id` 变量，但不唯一（该 id 和文章的对应关系存放在 Hexo Database 中，每次 `hexo clean` 时 Database 会被删除），所以如果使用 id 区分文章，你需要在每篇文章的 Front-Matter 中手动添加 id。所以我们推荐使用 `path`，除非你的站点的文章链接经常变动。

## [来必力 livere](https://livere.com/)

```
comment: livere
......
livere:
  data_uid: <data_uid> # 你的来必力 UID，可以在来必力后台获取
```