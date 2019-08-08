<div align="right">Main Contents: <a title="Start" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/start.md">Start</a> | <a title="Comment" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/comment.md">Comment</a> | Use | <a title="Notice" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/notice.md">Notice</a> | <a title="Chinese" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/use.md">Chinese</a></div>

# Use

## Contents

- [Add new post](#Add%20new%20post)
- [Links Page](#Links%20Page)
- [Picture Light Box](#Picture%20Light%20Box)
- [Article Cover](#Article%20Cover)
- [Analytics](#Analytics)
- [Settings](#Settings)

## Add new post

### Use terminal and shell
```
hexo new <title>
```
### Manually

Add a markdown file (`.md`) in `source/_posts` folder of your hexo project.

## Links Page

### Add new page
Add a markdown file (`.md`) in `source` folder of your hexo project. Customize its path and name as you like, which will defined the url of the page.

Add those content in it:
```
---
title: links
date:
layout: py
---
```

### Add links

Add the following directly in `.md`
```
- [![title](https://example.com/logo.png)](https://example.com/ "title")
```
例如:
```
- [![轻惋导航](https://www.chainwon.com/static/logo.png)](https://www.chainwon.com/ "轻惋导航")
```
### [Demo](https://nexmoe.com/PY.html)

## Picture Light Box

Auto-on feature to provide lightbox functionality for every image in the article
![Picture light box](https://nexmoe.com/images/pasted-4.png "Picture light box")

## Article Cover

Create a `.md` file in the `source` folder under the root directory of the site. The file name and path are determined according to your personal preferences and will determine the path to the page after rendering.

Add those content in it:
```
---
title: Hello World
date: 2013/7/13 20:46:25
cover: https://i.loli.net/2019/07/21/5d33d5dc1531213134.png
---
```

## Analytics

### [Google](https://analytics.google.com)

Log in to the Google Analytics administration backend, find your site - property settings, and find the `tracking ID`, which usually starts with `UA-`.
Fill in the `tracking ID` into `google_site_id` or `gtags_site_id` depending on how you want to use it.
**Please note: `gtags` needs to load larger and more files.**

### CNZZ

Log in to the CNZZ backstage and find the code installation page. You should provide code similar to the following:
```
<script src="//s95.cnzz.com/z_stat.php?id=<%= theme.analytics.cnzz_site_id %>&web_id={Your site ID}" language="JavaScript"></script>
```
Set that long string of IDs in `cnzz_site_id`.

>The content generated by the script will display "Webmaster Statistics", which Nexmoe has hidden.

### [Tencent analysis](http://ta.qq.com)

Log in to the Tencent Analysis Console, log in and get the ID of the analysis, and fill it in `tencent_site_id`.

### [Baidu statistics](http://tongji.baidu.com/)

Log in to Baidu's statistics console and navigate to the code acquisition page. You should provide code similar to the following:
```
<script>
    var _hmt = _hmt || [];
    (function() {var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?{Your site ID}';
    var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
```
Set that long string of IDs in `baidu_site_id`.

### [51.La statistics](https://www.51.la/)

Log in to the 51.La statistics console and navigate to the code acquisition page, which should provide code similar to the following:
```
<script type="text/javascript" src="//js.users.51.la/{Your site ID}.js"></script>
```
Set that long string of IDs in `la_site_id`.

## Settings

### site_verification

Authenticate your site to the search engine for submitting sitemaps to search engines and managing sites for inclusion by search engines.
```
Site_verification:
   Google:
   Baidu:
```

Get the method of the site_verification value:

1. Log in to the search engine backend. After adding the site, select the `HTML tag` method when verifying ownership. The search engine will then tell you to add something like a string to your page:
```
<meta name="xxxx-site-verification" content="xxxxxxxxxxxxxxxx" />
```
2. Copy the xxxxxxxxxxxxxxxx string and fill it in the corresponding search engine settings in `topic configuration file`. After the site is redeployed, you can pass the verification.

> If you have enabled `Google Analytics`, you can verify directly in `Google Webmaster` without having to use html markup verification again.

### Copyright agreement

You can set the copyright agreement for all articles, which will be displayed at the end of the article; support `HTML`. The copyright will include information such as `author of this article, links to this article, and agreement` .

For example, you can set this up:
```
copyright: '<strong>版权声明：</strong>本文采用 <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/cn/deed.zh" target="_blank">CC BY-NC-SA 3.0 CN</a> 协议进行许可'
```
You can also override this setting in the article's `Front-Matter`
```
copyright: '<strong>版权声明：</strong>本文采用 <a href="https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh" target="_blank">CC BY-NC 3.0 CN</a> 协议进行许可'
```
At the same time you can use the following `Front-Matter`
```
hide_copyright: true
```
To hide the copyright agreement for this article