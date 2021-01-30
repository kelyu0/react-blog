#! /bin/bash

# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd build

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kelyu0/react-issue-blog.git master:gh-pages
# git subtree push --prefix=build origin gh-pages
