var express = require("express");
var swig = require("swig");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.engine("html", swig.renderFile);
app.set("views", "./views");
app.set("view engine", "html");
swig.setDefaults({cache: false});

app.use("/public", express.static(__dirname + "/public"));

app.use("/admin", require("./routers/admin"));
app.use("/api", require("./routers/api"));
app.use("/", require("./routers/main"));

mongoose.connect("mongodb://localhost:27017/blog-of-ikundefined", {useNewUrlParser:true}, function(err){
    if(err){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
        app.listen(3000);
        console.log("your blog is running in http://localhost:3000");
    }
});