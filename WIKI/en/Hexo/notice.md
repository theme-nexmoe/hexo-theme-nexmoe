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

When hexo writes, if you add `<!--more-->` to the text, the part before the mark will become a brief description of the article, which is displayed on the home page.