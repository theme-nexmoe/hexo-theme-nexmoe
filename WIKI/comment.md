<div align="right">主目录: <a title="开始" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/start.md">开始</a> | 评论系统 | <a title="开始使用" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/use.md">开始使用</a> | <a title="注意事项" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/notice.md">注意事项</a> | <a title="English" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/comment.md">English</a></div>

# 评论系统

## 目录

- [开始](#%E4%BB%8B%E7%BB%8D)
- [Gitment](#gitment)
- [Gitalk](#gitalk)
- [Valine](#valine)


##开始

Nexmoe目前支持 3 种的评论系统，它们分别是 Gitment、Gitalk、Valine。

它们分别对应的键值是 `gitment` `gitalk` `valine`，将你想启用的评论系统的键值填写在 `comment` 中，然后找到对应评论系统的配置位置。

##[Gitment](https://github.com/imsun/gitment)

```
comment: gitment
......
gitment:
  owner: nexmoe # 持有该 repo 的 GitHub user
  repo: nexmoe.github.io # 存放评论的 issue 所在的 repo
  clientID:  # GitHub Client ID
  clientSecret:  # GitHub Client Secret
```
请仔细阅读Gitment的文档、教程，以知晓如何启用、填充上述参数。一般的，你需要 [创建一个新的 GitHub Application](https://github.com/settings/applications/new)

##[Gitalk](https://github.com/gitalk/gitalk)

```
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

##[Valine](https://valine.js.org/)

```
comment: valine
......
valine: 
  appId: <API_ID> # leancloud application app id
  appKey: <API_Key> # leancloud application app key
```
请仔细阅读 [Valine 的文档](https://valine.js.org/) 以知晓如何启用、填充上述参数。一般的，你需要一个 `LeanCloud 的账号`。