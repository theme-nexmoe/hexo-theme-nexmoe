<div align="right">Main Contents: <a title="Start" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/start.md">Start</a> | <a title="Comment" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/comment.md">Comment</a> | Use | <a title="Notice" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/notice.md">Notice</a> | <a title="Chinese" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/use.md">Chinese</a></div>

# Use

## Contents

- [Add new post](#Add%20new%20post)
- [Links Page](#Links%20Page)
- [Picture Light Box](#Picture%20Light%20Box)
- [Article Cover](#Article%20Cover)

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