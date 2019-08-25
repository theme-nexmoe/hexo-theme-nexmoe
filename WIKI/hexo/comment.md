# 评论系统

## 开始

Nexmoe目前支持 7 种的评论系统，它们分别是 Gitment、Gitalk、Valine、Disqus、disqusjs、搜狐畅言、来必力。

它们分别对应的键值是 `gitment` `gitalk` `valine` `disqus` `disqusjs` `changyan` `livere`，将你想启用的评论系统的键值填写在 `comment` 中，然后找到对应评论系统的配置位置。

## [Gitment](https://github.com/imsun/gitment)

``` yaml
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

``` yaml
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

``` yaml
comment: valine
......
valine: 
  appId: <API_ID> # leancloud application app id
  appKey: <API_Key> # leancloud application app key
```
请仔细阅读 [Valine 的文档](https://valine.js.org/) 以知晓如何启用、填充上述参数。一般的，你需要一个 `LeanCloud 的账号`。

## [Disqus](https://disqus.com)

``` yaml
comment: disqus
......
disqus:
  shortname: <shortname> # 你的 Disqus shortname
```
如果你不知道你的 `shortname` 是什么，请访问 Disqus 中你的站点的管理后台，此时你浏览器地址栏中的域名应形如是 `example.disqus.com`，`example` 就是你的 `shortname`。

## [Disqusjs](https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqusjs-%E5%8F%82%E6%95%B0)

这个模式下，需要用户配置一个 `https://disqus.com/api/3.0/` 的反向代理，在评论基本模式中使用反代 API 获取评论内容（但是基本模式下仍然不能发表评论）。同时提供一个按钮切换到 Disqus 完整模式下以发表评论。

>这项设置有助于在 **公开、平等、有序 的 网络审查 地区** 下的浏览者正常阅读评论内容。

``` yaml
disqusjs:
  shortname: <shortname> # 你的 Disqus shortname
  sitename: <sitename> # 你站点的名称，将会显示在「评论基础模式」的 header 中；该配置应该和 Disqus Admin - Settings - General - Website Name 一致
  api: https://disqus.skk.moe/disqus/ # DisqusJS 请求的 API Endpoint，通常情况下你应该配置一个 Disqus API 的反代并填入反代的地址。你也可以直接使用 DISQUS 官方 API 的 Endpoint https://disqus.com/api/，或是使用SukkaW搭建的 Disqus API 反代 Endpoint https://disqus.skk.moe/disqus/。
  apikey: <api_key> # DisqusJS 向 API 发起请求时使用的 API Key，你应该在配置 Disqus Application 时获取了 API Key;DisqusJS 支持填入一个 包含多个 API Key 的 Array，在每次请求时会随机使用其中一个；如果你只需要填入一个 API Key，则可以填入 String 或 Array。
  admin: <admin> # 你的站点的 Disqus Moderator 的用户名（也就是你的用户名）。你可以在 Disqus - Settings - Account - Username 获取你的 Username
  adminLabel: <adminLabel> # 你想显示在 Disqus Moderator Badge 中的文字。该配置应和 Disqus Admin - Settings - Community - Moderator Badge Text 相同
```

具体配置请阅读 [Disqusjs - 配置-disqusjs-参数](https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqusjs-%E5%8F%82%E6%95%B0)

## [搜狐畅言](http://changyan.kuaizhan.com/)

``` yaml
comment: changyan
......
changyan:
  appid: <APP_ID> # 畅言的 APPID
  conf: <CONF> # 畅言的 CONF
  thread_key_type: path # 可选 id 或 path
```

在畅言的后台找到安装方式，畅言应该提供了下述两个代码，你可以从其中找到你的 APPID 和 CONF：

``` html
!-- 畅言公共 js 代码 start -->
<script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId={这个就是你的 APPID}">
</script>
<!-- 畅言公共 js 代码 end -->
```

``` html
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

```  yaml
comment: livere
......
livere:
  data_uid: <data_uid> # 你的来必力 UID，可以在来必力后台获取
```

## [DiscussBot](https://comments.app/)

使用此评论，您需要一个 `Telegram账户` 。注册网站步骤非常简单，不另行阐述。

注册完成后您可以通过使用按钮来对比进行设置 `主题配置文件` 。

```  yaml
DiscussBot:
  id: <id> # 站点id
  comments: 5 # 可能是限制每位用户单页面评论最多条数？
  color: # 评论框主色调
  dislike: 0 # 显示差评按钮
  icons: 0 # 图标主题
  diff: 0 # 每位用户name不同颜色
```

`id` 对应申请完成后的 `Site ID`，`color` 对应下方代码框中的 `data-color` 值，如您使用默认颜色则无需填写，`icons` 对应 `Icons` 如您选择 `Filled` 请填入 `0`；如您选择`Outlined` 请填入 `1`，`diff` 代表 `Use different colors for names`，如您需要请填入 `1` ，无需请填入 `0` 。

如果以上没有满足你的评论框，可以在本主题目录 `layout/_partial/_comment` 新建一个文件 `xxx.ejs`，然后在该文件中安装你需要的评论框系统代码。
如果有空的话，你还可以使用 `pull request` 功能PR到本项目的 Github 仓库