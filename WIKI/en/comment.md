<div align="right">Main Contents: <a title="Start" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/start.md">Start</a> | Comment | <a title="Use" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/use.md">Use</a> | <a title="Notice" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/notice.md">Notice</a> | <a title="Chinese" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/comment.md">Chinese</a></div>

# Comment

## Contents

- [Start](#Start)
- [Gitment](#Gitment)
- [Gitalk](#Gitalk)
- [Valine](#Valine)
- [Disqus](#Disqus)
- [Sohu Changyan](#Sohu%20Changyan)
- [livere](#livere)

## Start

Nexmoe currently supports `six` review systems: Gitment, Gitalk, Valley, Disqus, Sohu Changyan, and livere.

The corresponding key values are `gitment` `gitalk` `valine` `disqus` `changyan` `livere`, fill in the key of the comment system you want to enable in `comment`, and then find the configuration location of the corresponding comment system.

## [Gitment](https://github.com/imsun/gitment)

```
comment: gitment
......
gitment:
  owner: nexmoe # GitHub user holding the repo
  repo: nexmoe.github.io # The repo where the issue of the comment is placed
  clientID:  # GitHub Client ID
  clientSecret:  # GitHub Client Secret
```
Read Gitment's documentation and tutorials to find out how to enable and populate the above parameters. In general, you need to [create a new GitHub Application](https://github.com/settings/applications/new)

## [Gitalk](https://github.com/gitalk/gitalk)

```
comment: gitalk
......
gitalk:
  admin: nexmoe # Administrator GitHub ID
  owner: nexmoe # GitHub user holding the repo
  repo: nexmoe.github.io # The repo where the issue of the comment is placed
  clientID:  # GitHub Client ID
  clientSecret:  # GitHub Client Secret
```
Please read Gitalk's documentation and tutorials carefully to know how to enable and populate the above parameters. In general, you need to [create a new GitHub Application](https://github.com/settings/applications/new)

## [Valine](https://valine.js.org/)

```
comment: valine
......
valine: 
  appId: <API_ID> # leancloud application app id
  appKey: <API_Key> # leancloud application app key
```
Please read [Valine's documentation](https://valine.js.org/) to know how to enable and populate the above parameters. In general, you need a `LeanCloud account`.

## [Disqus](https://disqus.com)

```
comment: disqus
......
disqus:
  shortname: <shortname> # disqus shortname
```
If you don't know what your `shortname` is, please visit the administrative background of your site in Disqus. The domain name in your browser's address bar should be like `example.disqus.com`, `example` is your `shortname`.

## [Sohu Changyan](http://changyan.kuaizhan.com/)

```
comment: changyan
......
changyan:
  appid: <APP_ID> # Changyan APPID
  conf: <CONF> # Changyan CONF
  thread_key_type: path # Optional id or path
```
Find the installation method in the Changyan, and you should provide the following two codes, from which you can find your APPID and CONF:
```
!-- Changyan public js code start -->
<script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId={This is your APPID}">
</script>
<!-- Changyan public js code end -->
```
```
<script>
(function(){
var appid = '{This is your APPID}';
var conf = '{This is your CONF}';
var width = window.innerWidth || document.documentElement.clientWidth;
if (width < 960) {
window.document.write('<script id="changyan_mobile_js" charset="utf-8" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>'); } else { var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("https://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); } })();
</script>
```
Please note that Sohu Changyan provides a way to distinguish between two articles, `id` and `path` (article directory). Although each article is given a `page.id` variable each time you execute `hexo g`, it is not unique (the correspondence between the id and the article is stored in Hexo Database, and each time `hexo clean` is Database Will be deleted), so if you use id to distinguish articles, you need to manually add ids in each article's Front-Matter. So we recommend using `path` unless the link to the article on your site changes frequently.

## [livere](https://livere.com/)

```
comment: livere
......
livere:
  data_uid: <data_uid> # Your livere UID, which can be obtained in the livere backstage
```