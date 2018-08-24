var express = require("express");
var router = express.Router();
var User = require("../modules/Users");

var responseData;

router.use(function(req, res, next){
    responseData = {
        code: 0,
        message: ""
    }
    next();  // next是什么作用？
});

router.post("/user/register", function(req, res, next){
    // 注册逻辑
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    if(username == "") {
        responseData.code = 1;
        responseData.message = "用户名不准为空！";
        res.json(responseData);
        return;
    }
    if(password == "") {
        responseData.code = 2;
        responseData.message = "密码不准为空！";
        res.json(responseData);
        return;
    }
    if(password != repassword) {
        responseData.code = 3;
        responseData.message = "两次输入密码不同！";
        res.json(responseData);
        return;
    }
    User.findOne({
        username: username
    }).then(function(userInfo){
        if(userInfo){
            responseData.code = 4;
            responseData.message = "用户名已被注册！";
            res.json(responseData);
            return;
        }
        var user = new User({
            username: username,
            password: password
        });
        return user.save();
    }).then(function(newUserInfo){
        console.log(newUserInfo);
        responseData.message = "注册成功！";
        res.json(responseData);
    });
});

module.exports = router;