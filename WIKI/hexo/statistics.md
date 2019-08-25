# 统计系统

## [Google](https://analytics.google.com)

登陆 Google Analytics 管理后台，找到你的站点 - 媒体资源设置，找到 `跟踪 ID`，一般是以 `UA-` 开头。
根据你想使用的方式，将 `跟踪 ID` 填写到 `google_site_id` 或 `gtags_site_id` 中。
**请注意: `gtags` 需要加载更大更多的文件。**



## CNZZ

登陆 CNZZ 后台，找到代码安装页面，应该会提供类似如下形式的代码：

``` html
<script src="//s95.cnzz.com/z_stat.php?id=<%= theme.analytics.cnzz_site_id %>&web_id={你的站点 ID}" language="JavaScript"></script>
```

把那一长串 ID 设置在 `cnzz_site_id` 中。

>脚本生成的内容会产生“站长统计”，Nexmoe已将其隐藏。



## [腾讯分析](http://ta.qq.com)

登录腾讯分析控制台，登录并获取分析的 ID，填入 `tencent_site_id` 中。



## [百度统计](http://tongji.baidu.com/)

登陆百度统计后台，定位到代码获取页面，应该会提供类似如下形式的代码：

``` html
<script>
    var _hmt = _hmt || [];
    (function() {var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?{这一长串就是你的 ID}';
    var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
```

把那一长串 ID 设置在 `baidu_site_id` 中。



## [51.La统计](https://www.51.la/)

登陆51.La统计后台，定位到代码获取页面，应该会提供类似如下形式的代码：

``` html
<script type="text/javascript" src="//js.users.51.la/{这一长串就是你的 ID}.js"></script>
```

把那一长串 ID 设置在 `la_site_id` 中。