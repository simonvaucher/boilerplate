#!/bin/sh

DEFAULT_BRANCH=master

BRANCH=${1:-$DEFAULT_BRANCH}

echo "pulling brach: $BRANCH"
cd boilerplate && git fetch && git checkout $BRANCH && git pull

echo "npm install"
npm install

echo "building webpack artifacts"
npm run build

echo "restart server"
pm2 restart express-server # name of pm2 script - choose your own
