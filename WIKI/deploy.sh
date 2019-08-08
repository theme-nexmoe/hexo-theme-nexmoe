#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件
vuepress build
 
# 进入生成的文件夹
cd .vuepress/dist

git init
 
# 下面这行是官网没有的，如果是多人开发项目，务必执行此命令
git pull https://github.com/nexmoe/hexo-theme-nexmoe.git master 
git add -A
git commit -m 'deploy'
git push -f https://github.com/nexmoe/hexo-theme-nexmoe.git master:gh-pages
 
cd -
