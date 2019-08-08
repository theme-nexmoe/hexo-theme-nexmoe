<div align="right">Main Contents: <a title="Start" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/start.md">Start</a> | <a title="Comment" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/comment.md">Comment</a> | <a title="Use" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/en/use.md">Use</a> | Notice | <a title="Chinese" href="https://github.com/nexmoe/hexo-theme-nexmoe/blob/master/WIKI/notice.md">Chinese</a></div>

# Precautions

## Contents

- [Highlighting](#Highlighting)
- [Using Git with Hexo](#Using%20Git%20with%20Hexo)

## Highlighting
The theme built-in code is highlighted and automatically turned on. To avoid conflicts,please disable highlight in `Site Profile`.
```
highlight:
  enable: false
```

## Using Git with Hexo
As we said at the Strat Using, we use `_config.example.yml` to avoid conflict in git.

We also add `_config.yml` to `.gitignore` to prevent our `theme config` pushing into theme repo. However, it will cause your theme config not be pushed. You need to **remove** `_config.yml` in `.gitignore`. If you do that, there may be some conflict when you are uing `git pull` to upgrade “Nexmoe”.