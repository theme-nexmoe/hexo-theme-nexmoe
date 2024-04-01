---
title: 文章演示页面
date: 2021-07-25
cover: https://cdn.jsdelivr.net/gh/nexmoe/nexmoe.github.io@latest/images/cover/compress/5c3aec85a4343.jpg
coverWidth: 920
coverHeight: 613、
tags: 
  -	演示标签
categories:
  - 演示分类
---

显示在首页的内容

[![Powered By Vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg "Powered By Vercel")](https://vercel.com/?utm_source=theme-nexmoe&utm_campaign=oss "Powered By Vercel")

<!--more-->

# 一级标题
## 二级标题
### 三级标题
#### 四级标题


## 瀑布流图片

{% gallery %}
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192754.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192756.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192757.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192530.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192531.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192534.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192535.jpg)
![1](https://cdn.jsdelivr.net/gh/nexmoe/image@latest/20210207192415.jpg)
{% endgallery %}

## 相片集
![珠江](https://i.loli.net/2018/09/01/5b8a59551a4d8.jpg)|![珠江](https://i.loli.net/2018/09/01/5b8a6ab761262.jpg)|![某收门票公园](https://i.loli.net/2018/09/01/5b8a5994b6e28.jpg)
- | - | -
![某收门票公园](https://i.loli.net/2018/09/01/5b8a5994b6e28.jpg)|![某收门票公园](https://i.loli.net/2018/09/01/5b8a5c8c34439.jpg)|![珠海](https://i.loli.net/2018/09/01/5b8a59d5c50f3.jpg)

## 字符效果和横线等

----

~~删除线~~ 
*斜体字*      _斜体字_
**粗体**  __粗体__
***粗斜体*** ___粗斜体___

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

## 引用 Blockquotes

> 引用文本 Blockquotes

## 锚点与链接 Links

[普通链接](http://localhost/)

[普通链接带描述](http://localhost/ "描述")

直接链接：https://github.com

## 多语言代码高亮 Codes

#### 行内代码 Inline code

执行命令：`npm install marked`

#### JS代码　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML代码 HTML codes

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

## 图片 Images


![赞助我](https://i.dawnlab.me/ee0093ead3ca8145522ba766c3f9a0ee.png)


图片加链接 (Image + Link)：

[![](https://i.dawnlab.me/ee0093ead3ca8145522ba766c3f9a0ee.png)](https://nexmoe.com/donate.html "赞助我")

----

### 列表 Lists

#### 无序列表

- 列表一
- 列表二
    - 列表二-1
    - 列表二-2
    - 列表二-3
- 列表三
    - 列表一
    - 列表二
    - 列表三

#### 有序列表

1. 第一行
2. 第二行
3. 第三行

#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
                
----

### 绘制表格 Tables

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12   |
| 管线        |    $1    |  234  |

<br>