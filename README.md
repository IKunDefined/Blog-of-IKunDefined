# the Blog Of IKunDefined

基于**Node.js**+**Express**+**MongoDB**的个人博客

参考教程

* [腾讯课堂](https://ke.qq.com/course/185893)

## 技术选型

### 核心技术

* Node.js
* Express
* MongoDB
* jQuery

### 辅助工具

* Cookies
* Mongoose
* body-parser
* Swig

## 本地环境

* Node.js
* MongoDB

## 基本功能

* 用户注册、登录、注销功能
* 后台用户、分类、文章管理
* 首页文章阅览
* 文章详情阅览

## 本地部署

1. `git clone https://github.com/IKunDefined/Blog-of-IKunDefined.git`或者下载.zip压缩包
2. `cd blog-of-ikundefined`
3. `npm install`或者`cnpm install`
4. `mongod dbpath="数据存储文件夹路径"`

    * 文件夹自行创建

5. 通过首页用户注册接口注册完成后，将用户的`isAdmin`设为`true`即可从首页进入后台管理员界面

## 线上参考

* [Blog of IKunDefined](http://59.111.58.150/)

    * 上线环境配置使用了[Docker](https://www.docker.com/)和[Dotenv](https://www.npmjs.com/package/dotenv)

***

仍在升级、开发和维护中