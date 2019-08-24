(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{211:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"评论系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评论系统","aria-hidden":"true"}},[e._v("#")]),e._v(" 评论系统")]),e._v(" "),a("h2",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始")]),e._v(" "),a("p",[e._v("Nexmoe目前支持 7 种的评论系统，它们分别是 Gitment、Gitalk、Valine、Disqus、disqusjs、搜狐畅言、来必力。")]),e._v(" "),a("p",[e._v("它们分别对应的键值是 "),a("code",[e._v("gitment")]),e._v(" "),a("code",[e._v("gitalk")]),e._v(" "),a("code",[e._v("valine")]),e._v(" "),a("code",[e._v("disqus")]),e._v(" "),a("code",[e._v("disqusjs")]),e._v(" "),a("code",[e._v("changyan")]),e._v(" "),a("code",[e._v("livere")]),e._v("，将你想启用的评论系统的键值填写在 "),a("code",[e._v("comment")]),e._v(" 中，然后找到对应评论系统的配置位置。")]),e._v(" "),a("h2",{attrs:{id:"gitment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitment","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/imsun/gitment",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitment"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("comment: gitment\n......\ngitment:\n  owner: nexmoe # 持有该 repo 的 GitHub user\n  repo: nexmoe.github.io # 存放评论的 issue 所在的 repo\n  clientID:  # GitHub Client ID\n  clientSecret:  # GitHub Client Secret\n")])])]),a("p",[e._v("请仔细阅读Gitment的文档、教程，以知晓如何启用、填充上述参数。一般的，你需要 "),a("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建一个新的 GitHub Application"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"gitalk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitalk","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitalk"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("comment: gitalk\n......\ngitalk:\n  admin: nexmoe # 管理员 GitHub ID\n  owner: nexmoe # 持有该 repo 的 GitHub user\n  repo: nexmoe.github.io # 存放评论的 issue 所在的 repo\n  clientID:  # GitHub Client ID\n  clientSecret:  # GitHub Client Secret\n")])])]),a("p",[e._v("请仔细阅读Gitalk的文档、教程，以知晓如何启用、填充上述参数。一般的，你需要 "),a("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建一个新的 GitHub Application"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"valine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valine","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://valine.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Valine"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("comment: valine\n......\nvaline: \n  appId: <API_ID> # leancloud application app id\n  appKey: <API_Key> # leancloud application app key\n")])])]),a("p",[e._v("请仔细阅读 "),a("a",{attrs:{href:"https://valine.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Valine 的文档"),a("OutboundLink")],1),e._v(" 以知晓如何启用、填充上述参数。一般的，你需要一个 "),a("code",[e._v("LeanCloud 的账号")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"disqus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disqus","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://disqus.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disqus"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("comment: disqus\n......\ndisqus:\n  shortname: <shortname> # 你的 Disqus shortname\n")])])]),a("p",[e._v("如果你不知道你的 "),a("code",[e._v("shortname")]),e._v(" 是什么，请访问 Disqus 中你的站点的管理后台，此时你浏览器地址栏中的域名应形如是 "),a("code",[e._v("example.disqus.com")]),e._v("，"),a("code",[e._v("example")]),e._v(" 就是你的 "),a("code",[e._v("shortname")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"disqusjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disqusjs","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqusjs-%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disqusjs"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("这个模式下，需要用户配置一个 "),a("code",[e._v("https://disqus.com/api/3.0/")]),e._v(" 的反向代理，在评论基本模式中使用反代 API 获取评论内容（但是基本模式下仍然不能发表评论）。同时提供一个按钮切换到 Disqus 完整模式下以发表评论。")]),e._v(" "),a("blockquote",[a("p",[e._v("这项设置有助于在 "),a("strong",[e._v("公开、平等、有序 的 网络审查 地区")]),e._v(" 下的浏览者正常阅读评论内容。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("disqusjs:\n  shortname: <shortname> # 你的 Disqus shortname\n  sitename: <sitename> # 你站点的名称，将会显示在「评论基础模式」的 header 中；该配置应该和 Disqus Admin - Settings - General - Website Name 一致\n  api: https://disqus.skk.moe/disqus/ # DisqusJS 请求的 API Endpoint，通常情况下你应该配置一个 Disqus API 的反代并填入反代的地址。你也可以直接使用 DISQUS 官方 API 的 Endpoint https://disqus.com/api/，或是使用SukkaW搭建的 Disqus API 反代 Endpoint https://disqus.skk.moe/disqus/。\n  apikey: <api_key> # DisqusJS 向 API 发起请求时使用的 API Key，你应该在配置 Disqus Application 时获取了 API Key;DisqusJS 支持填入一个 包含多个 API Key 的 Array，在每次请求时会随机使用其中一个；如果你只需要填入一个 API Key，则可以填入 String 或 Array。\n  admin: <admin> # 你的站点的 Disqus Moderator 的用户名（也就是你的用户名）。你可以在 Disqus - Settings - Account - Username 获取你的 Username\n  adminLabel: <adminLabel> # 你想显示在 Disqus Moderator Badge 中的文字。该配置应和 Disqus Admin - Settings - Community - Moderator Badge Text 相同\n")])])]),a("p",[e._v("具体配置请阅读 "),a("a",{attrs:{href:"https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqusjs-%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disqusjs - 配置-disqusjs-参数"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"搜狐畅言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜狐畅言","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"http://changyan.kuaizhan.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("搜狐畅言"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("comment: changyan\n......\nchangyan:\n  appid: <APP_ID> # 畅言的 APPID\n  conf: <CONF> # 畅言的 CONF\n  thread_key_type: path # 可选 id 或 path\n")])])]),a("p",[e._v("在畅言的后台找到安装方式，畅言应该提供了下述两个代码，你可以从其中找到你的 APPID 和 CONF：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('!-- 畅言公共 js 代码 start --\x3e\n<script id="cy_cmt_num" src="https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId={这个就是你的 APPID}">\n<\/script>\n\x3c!-- 畅言公共 js 代码 end --\x3e\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<script>\n(function(){\nvar appid = \'{这个就是你的 APPID}\';\nvar conf = \'{这个就是你的 CONF}\';\nvar width = window.innerWidth || document.documentElement.clientWidth;\nif (width < 960) {\nwindow.document.write(\'<script id="changyan_mobile_js" charset="utf-8" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=\' + appid + \'&conf=\' + conf + \'"><\\/script>\'); } else { var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("https://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); } })();\n<\/script>\n')])])]),a("p",[e._v("请注意，搜狐畅言提供两种文章的区分方式，"),a("code",[e._v("id")]),e._v(" 和 "),a("code",[e._v("path")]),e._v("（文章目录）。虽然在每次执行 "),a("code",[e._v("hexo g")]),e._v(" 时每一篇文章都会被赋予一个 "),a("code",[e._v("page.id")]),e._v(" 变量，但不唯一（该 id 和文章的对应关系存放在 Hexo Database 中，每次 "),a("code",[e._v("hexo clean")]),e._v(" 时 Database 会被删除），所以如果使用 id 区分文章，你需要在每篇文章的 Front-Matter 中手动添加 id。所以我们推荐使用 "),a("code",[e._v("path")]),e._v("，除非你的站点的文章链接经常变动。")]),e._v(" "),a("h2",{attrs:{id:"来必力-livere"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来必力-livere","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://livere.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("来必力 livere"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("comment: livere\n......\nlivere:\n  data_uid: <data_uid> # 你的来必力 UID，可以在来必力后台获取\n")])])]),a("h2",{attrs:{id:"discussbot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discussbot","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://comments.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DiscussBot"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("使用此评论，您需要一个 "),a("code",[e._v("Telegram账户")]),e._v(" 。注册网站步骤非常简单，不另行阐述。")]),e._v(" "),a("p",[e._v("注册完成后您可以通过使用按钮来对比进行设置 "),a("code",[e._v("主题配置文件")]),e._v(" 。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("DiscussBot:\n  id: <id> # 站点id\n  comments: 5 # 可能是限制每位用户单页面评论最多条数？\n  color: # 评论框主色调(不要#)\n  dislike: 0 # 显示差评按钮\n  icons: 0 # 图标主题\n  diff: 0 # 每位用户name不同颜色\n")])])]),a("p",[a("code",[e._v("id")]),e._v(" 对应申请完成后的 "),a("code",[e._v("Site ID")]),e._v("，"),a("code",[e._v("color")]),e._v(" 对应下方代码框中的 "),a("code",[e._v("data-color")]),e._v(" 值，如您使用默认颜色则无需填写，"),a("code",[e._v("icons")]),e._v(" 对应 "),a("code",[e._v("Icons")]),e._v(" 如您选择 "),a("code",[e._v("Filled")]),e._v(" 请填入 "),a("code",[e._v("0")]),e._v("；如您选择"),a("code",[e._v("Outlined")]),e._v(" 请填入 "),a("code",[e._v("1")]),e._v("，"),a("code",[e._v("diff")]),e._v(" 代表 "),a("code",[e._v("Use different colors for names")]),e._v("，如您需要请填入 "),a("code",[e._v("1")]),e._v(" ，无需请填入 "),a("code",[e._v("0")]),e._v(" 。")]),e._v(" "),a("p",[e._v("如果以上没有满足你的评论框，可以在本主题目录 "),a("code",[e._v("layout/_partial/_comment")]),e._v(" 新建一个文件 "),a("code",[e._v("xxx.ejs")]),e._v("，然后在该文件中安装你需要的评论框系统代码。\n如果有空的话，你还可以使用 "),a("code",[e._v("pull request")]),e._v(" 功能PR到本项目的 Github 仓库")])])},[],!1,null,null,null);t.default=s.exports}}]);