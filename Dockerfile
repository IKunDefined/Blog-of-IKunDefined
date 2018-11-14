FROM node:8-alpine



RUN apk add --no-cache mongodb --repository http://mirrors.ustc.edu.cn/alpine/v3.8/main

RUN mkdir -p /data/db
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install --registry=https://registry.npm.taobao.org

ENV HOST 0.0.0.0
EXPOSE 3000

# ENTRYPOINT [ "mongod", "-logpath", "/usr/src/app/mongo.log", "-fork"]
CMD mongod -logpath /usr/src/app/mongo.log -fork && node app.js
