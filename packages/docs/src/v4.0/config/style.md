# 样式

## 使用

您应该在根目录中的 `_config.nexmoe.yml` 中设置 `customStyles` 的值。
默认配置如下：

```yaml
customStyles:
  - custom.css
```

然后，您应该在名为 `source` 的路径中创建一个名为 `custom.css` 的文件。这样您就可以编写自己的自定义样式。

## 默认变量

```css
:root {
    --gutter: 25px;
    --radius: 13px;
    --color-primary: #ff4e6a;
    --color2: #ff761e;
    --color3: #ffb900;
    --color4: #33d57a;
    --color5: #00dbff;
    --color6: #1a98ff;
    --color7: #9090ff;
    --color-primary-bg: rgba(255,78,106,0.15);
    --color2-bg: rgba(255,118,30,0.15);
    --color3-bg: rgba(255,185,0,0.15);
    --color4-bg: rgba(51,213,122,0.15);
    --color5-bg: rgba(0,219,255,0.15);
    --color6-bg: rgba(26,152,255,0.15);
    --color7-bg: rgba(144,144,255,0.15);
    --color-shadow: rgba(161, 177, 204, 0.4);
}
```
