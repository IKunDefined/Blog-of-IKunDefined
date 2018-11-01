const express = require("express");
const swig = require("swig");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Cookies = require("cookies");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    req.cookies = new Cookies(req, res);
    if (req.cookies.get("userInfo")) {
        req.userInfo = JSON.parse(req.cookies.get("userInfo"));
    }
    next();
});

app.engine("html", swig.renderFile);
app.set("views", "./views");
app.set("view engine", "html");
swig.setDefaults({
    cache: false
});

app.use("/public", express.static(__dirname + "/public"));

app.use("/", require("./routers/main"));
app.use("/api", require("./routers/api"));
app.use("/admin", require("./routers/admin"));
app.use("/article", require("./routers/article"));

mongoose.connect("mongodb://localhost:27017/blog-of-ikundefined", {useNewUrlParser:true}, function(){
    console.log("database connect success");
    app.listen(3000);
    console.log("your blog is running in http://localhost:3000");
});