#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件
vuepress build
 
# 进入生成的文件夹
cd .vuepress/dist
echo 'docs.nexmoe.com' > CNAME
git init
 
git add -A
git commit -m '🔥 部署文档'
git push -f https://github.com/nexmoe/hexo-theme-nexmoe.git master:gh-pages
 
cd -