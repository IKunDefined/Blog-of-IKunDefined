// 引入相关库
var express = require("express");
var swig = require("swig");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Cookies = require("cookies");

// 建立express应用
var app = express();

// 调用post报文解析
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req,res,next){
    req.cookies = new Cookies(req,res);
    req.userInfo = {};
    if (req.cookies.get("userInfo")) {
        try {
            req.userInfo = JSON.parse(req.cookies.get("userInfo"));
        } catch (e) {}
    }
    next();
});

// 配置模板
app.engine("html", swig.renderFile);
app.set("views", "./views");
app.set("view engine", "html");
swig.setDefaults({cache: false});

// - 路由表 -

// 配置静态路由
app.use("/public", express.static(__dirname + "/public"));

// 配置动态路由
app.use("/admin", require("./routers/admin"));
app.use("/api", require("./routers/api"));
app.use("/", require("./routers/main"));

// 连接数据库
mongoose.connect("mongodb://localhost:27017/blog-of-ikundefined", {useNewUrlParser:true}, function(err){
    if(err){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
        // 监听端口
        app.listen(3000);
        console.log("your blog is running in http://localhost:3000");
    }
});