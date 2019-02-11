const path = require('path')
// Web框架
const express = require('express')
// 模板引擎
const swig = require('swig')
// 数据库交互
const mongoose = require('mongoose')
// Cors跨域
const cors = require('cors')
// Cookies相关操作
const Cookies = require('cookies')

// 读取配置文件
require('dotenv').config()

// Express实例
const app = express()

// app.all('*',function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", req.headers.origin);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("Access-Control-Allow-Credentials",true);
//     res.header("Content-Type", "application/json;charset=utf-8");
//    next();
// });

// 配置Cookies的跨域设置
let corsOptions = {
  origin: 'http://localhost:8080',
  // 这一项是为了跨域专门设置的
  credentials: true
  // maxAge: '1728000'
}

// 使用Cors进行跨域处理 引用配置项
app.use(cors(corsOptions))

// 使用Cookies检查用户是否登陆
app.use(function (req, res, next) {
  req.cookies = new Cookies(req, res)
  if (req.cookies.get('userInfo')) {
    req.userInfo = JSON.parse(req.cookies.get('userInfo'))
  }
  next()
})

// 配置模板引擎
app.engine('html', swig.renderFile)
app.set('views', './views')
app.set('view engine', 'html')
swig.setDefaults({
  cache: false
})

// 配置静态文件托管
app.use('/static', express.static(path.join(__dirname, '/static')))

// 主要界面路由
app.use('/', require('./routers/main'))
// 用户接口路由
app.use('/user', require('./routers/user'))
// 管理员接口路由
app.use('/admin', require('./routers/admin'))
// 文章页面路由
app.use('/article', require('./routers/article'))

app.use('*', require('./routers/error'))

const {
  DB_HOST,
  DB_NAME,
  DB_USER = '',
  DB_PASS = ''
} = process.env
if (!DB_HOST || !DB_NAME) {
  console.error('please set DB_HOST or DB_NAME in ".env"')
  process.exit(5)
}

// 链接数据库 打开服务
mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`, {
  useNewUrlParser: true
}, function (err) {
  if (!err) {
    app.listen(3000)
    console.log('your blog is running in http://localhost:3000')
  } else {
    console.log(err)
  }
})
