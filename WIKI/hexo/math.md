# 使用 Mathjax

## 使用Kramed代替 Marked

`hexo` 默认的渲染引擎是 `marked` ，但是 `marked` 不支持 `mathjax` 。 `kramed` 是在 `marked` 的基础上进行修改。我们在工程目录下执行以下命令来安装 `kramed` 。

``` bash
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save
```

然后，打开 `/node_modules/hexo-renderer-kramed/lib/renderer.js` ，更改：

``` js
function formatText(text) {
    // Fit kramed's rule: $$ + \1 + $$
    return text.replace(/`\$(.*?)\$`/g, '$$$$$1$$$$');
}
```

为

``` js
function formatText(text) {
    return text;
}
```

## 安装mathjax包

如果之前安装过 `hexo-math` ,则先卸载 `hexo-math` 再安装 `mathjax`

``` bash
npm uninstall hexo-math --save
npm install hexo-renderer-mathjax --save
```

## 更新 Mathjax 的 CDN 链接

打开 `/node_modules/hexo-renderer-mathjax/mathjax.html` 修改

``` html
<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
```

为

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>
```

## 更改默认转义规则

因为 `hexo` 默认的转义规则会将一些字符进行转义，比如 `_` 转为 `<em>` , 所以我们需要对默认的规则进行修改。打开 `/node_modules/kramed/lib/rules/inline.js` ,修改 `inline` 变量中。

``` js
escape: /^\\([\\`*{}\[\]()#$+\-.!_>])/,
```

更改为:

``` js
escape: /^\\([`*\[\]()# +\-.!_>])/,
```

把

``` js
em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
```

更改为:

``` js
em: /^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
```

## 开启mathjax

打开 `主题配置文件` ,增加以下字段：

``` yaml
mathjax:
  enable: true
  per_page: true //按需加载mathjax
```

在每次需要用的博文中，在文章的 `Front-matter` 里打开 `mathjax` 开关

``` yaml
mathjax: true
```

————————————————

版权声明：本文为CSDN博主「冉茂松」的原创文章，遵循 [CC 4.0 by-sa版权协议](https://creativecommons.org/licenses/by-sa/4.0/) ，转载请附上原文出处链接及本声明。

原文链接：[https://blog.csdn.net/u014630987/article/details/78670258](https://blog.csdn.net/u014630987/article/details/78670258)