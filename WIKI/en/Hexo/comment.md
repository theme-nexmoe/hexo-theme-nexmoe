# Comment

## Start

Nexmoe currently supports `seven` review systems: Gitment, Gitalk, Valley, Disqus, Disqusjs, Sohu Changyan, and livere.

The corresponding key values are `gitment` `gitalk` `valine` `disqus` `disqusjs` `changyan` `livere`, fill in the key of the comment system you want to enable in `comment`, and then find the configuration location of the corresponding comment system.

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

## [Disqusjs](https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqusjs-%E5%8F%82%E6%95%B0)

In this mode, the user needs to configure a reverse proxy of `https://disqus.com/api/3.0/` to use the anti-generation API to get the comment content in the comment basic mode (but the comment cannot be published in the basic mode). Also provide a button to switch to the full text of Disqus to post a comment.

>This setting helps viewers in **an open, equal, and orderly online review area** read the comments as they normally.

```
disqusjs:
  shortname: <shortname> # Your Disqus shortname
  sitename: <sitename> # The name of your site will be displayed in the header of the "Comment Based Mode"; this configuration should be consistent with the Disqus Admin - Settings - General - Website Name
  api: https://disqus.skk.moe/disqus/ # The API Endpoint requested by the DisqusJS. Normally you should configure a reverse of the Disqus API and fill in the inverted address. You can also use the Endpoint https://disqus.com/api/ of the DISQUS official API directly, or use the Google API built by SukkaW to reverse Endpoint https://disqus.skk.moe/disqus/.
  apikey: <api_key> # The API Key used by the companyJS to make a request to the API, you should get the API Key when configuring the Disqus application; the DisqusJS support fills in an Array containing multiple API Keys, which will be used randomly at each request; if you only Need to fill in an API Key, you can fill in String or Array.
  admin: <admin> # The username of your site's Disqus Moderator (that is, your username). You can get your Username in Disqus - Settings - Account - Username
  adminLabel: <adminLabel> # You want to display the text in the Disqus Moderator Badge. This configuration should be the same as the Disqus Admin - Settings - Community - Moderator Badge Text
```

Please read [Disqusjs - 配置-disqusjs-参数](https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqusjs-%E5%8F%82%E6%95%B0) for specific configuration 

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

## [DiscussBot](https://comments.app/)

To use this comment, you need a `Telegram Account`. The steps to register a website are very simple and will not be elaborated.

After registration is complete, you can set the `topic profile` by using the button.

```
DiscussBot:
  id: <id> # site id
  comments: 5 # May be limiting the maximum number of comments per user on a single page?
  color: # comment box main color
  dislike: 0 # Show bad review button
  icons: 0 # icon theme
  diff: 0 # each user name different color
```

`id` corresponds to the `Site ID` after the application is completed, `color` corresponds to the `data-color` value in the code box below. If you use the default color, you don't need to fill it in. `icons` corresponds to `Icons`. If you choose `Filled ` Please fill in `0`; if you choose `Outlined`, please fill in `1`, `diff` stands for `Use different colors for names`, please fill in `1` if you need, please fill in `0` .