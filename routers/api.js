const express = require("express");
const router = express.Router();
const User = require("../models/User");

var responseData;

router.use(function(req, res, next) {
    responseData = {
        code: 0,                                  
        message: ""
    }
    next();
});

router.post("/user/register", function(req, res) {
    
    var username = req.body.username;          
    var password = req.body.password;         
    var repassword = req.body.repassword;   
    
    if(username === "" || password === "") { 
        responseData.code = 1;                     
        responseData.message = "用户名或密码不能为空！";   
        res.json(responseData);                    
        return;                                  
    }

    if(password != repassword) {         
        responseData.code = 2;                      
        responseData.message = "两次输入密码不同！";  
        res.json(responseData);                     
        return;                                    
    }

    User.findOne({                                  
        username: username                         
    }).then(function(userInfo) {                      
        if(userInfo){                               
            responseData.code = 3;                   
            responseData.message = "用户名已被注册！";
            res.json(responseData);                
            return;                                  
        } else {
            var user = new User({                
                username: username,                   
                password: password                     
            });
            user.save(); 
            responseData.message = "注册成功！";
            res.json(responseData);   
        }
    });
});

router.post("/user/login", function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    if(username === "" || password === "") {
        responseData.code = 1;
        responseData.message = "用户名或密码不能为空";
        res.json(responseData);
        return;
    }

    User.findOne({
        username: username,
        password: password
    }).then(function(userInfo) {
        if(!userInfo){
            responseData.code = 2;
            responseData.message = "用户名或密码错误";
            res.json(responseData);
            return;
        } else {
            responseData.message = "登陆成功";
            req.cookies.set("userInfo", JSON.stringify({
                id: userInfo._id,
                username: userInfo.username
            }));
            res.json(responseData);
        }
    });
});

router.get("/user/logout", function(req, res) {
    req.cookies.set("userInfo", null);
    responseData.message = "注销成功";
    res.json(responseData);
})

module.exports = router;