<div align="right">Main Contents: <a title="Start" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/start.md">Start</a> | Comment | <a title="Use" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/use.md">Use</a> | <a title="Notice" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/notice.md">Notice</a> | <a title="Chinese" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/comment.md">Chinese</a></div>

# Comment

## Contents

- [Start](#Start)
- [Gitment](#Gitment)
- [Gitalk](#Gitalk)
- [Valine](#Valine)


## Start

Nexmoe currently supports `three` review systems: Gitment, Gitalk, and Valley.

The corresponding key values are `gitment` `gitalk` `valine`, fill in the key of the comment system you want to enable in `comment`, and then find the configuration location of the corresponding comment system.

##[Gitment](https://github.com/imsun/gitment)

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

##[Gitalk](https://github.com/gitalk/gitalk)

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

##[Valine](https://valine.js.org/)

```
comment: valine
......
valine: 
  appId: <API_ID> # leancloud application app id
  appKey: <API_Key> # leancloud application app key
```
Please read [Valine's documentation](https://valine.js.org/) to know how to enable and populate the above parameters. In general, you need a `LeanCloud account`.