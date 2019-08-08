# Precautions

## Highlighting
The theme built-in code is highlighted and automatically turned on. To avoid conflicts,please disable highlight in `Site Profile`.
```
highlight:
  enable: false
```

## Using Git with Hexo
As we said at the Strat Using, we use `_config.example.yml` to avoid conflict in git.

We also add `_config.yml` to `.gitignore` to prevent our `theme config` pushing into theme repo. However, it will cause your theme config not be pushed. You need to **remove** `_config.yml` in `.gitignore`. If you do that, there may be some conflict when you are uing `git pull` to upgrade “Nexmoe”.

## Add the Read More tag

hexo 在写作的时候，如果在文中添加 `<!--more-->` 则该标记之前的部分就会成为该文章的简述，显示在首页里。