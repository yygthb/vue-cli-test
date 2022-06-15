#!/usr/bin/env sh

# stop if error
set -e

# run build
npm run build

# deploy to gh-pages
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:yygthb/vue-cli-test.git master:gh-pages

cd -
