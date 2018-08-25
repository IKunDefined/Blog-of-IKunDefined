var express = require("express");
var router = express.Router();
var User = require("../modules/Users");

var responseData;                                   // 声明响应报文

router.use(function(req, res, next){
    responseData = {
        code: 0,                                    // 初始化响应码
        message: ""                                 // 初始化响应信息
    }
    next();  // next是什么作用？
});

router.post("/user/register", function(req, res, next){

    // 注册逻辑
    
    var username = req.body.username;                // 获取注册用户名
    var password = req.body.password;                // 获取注册密码
    var repassword = req.body.repassword;            // 获取密码验证
    
    if(username == "") {                             // 验证用户名是否为空
        responseData.code = 1;                       // 定义响应码
        responseData.message = "用户名不准为空！";    // 定义响应信息
        res.json(responseData);                      // 以JSON形式响应报文内容
        return;                                      // 返回响应报文
    }

    if(password == "") {                             // 验证密码是否为空
        responseData.code = 2;                       // 定义响应码
        responseData.message = "密码不准为空！";      // 定义响应信息
        res.json(responseData);                      // 以JSON形式响应报文内容
        return;                                      // 返回响应报文
    }

    if(password != repassword) {                     // 验证确认密码是否输入相同
        responseData.code = 3;                       // 定义响应码
        responseData.message = "两次输入密码不同！";   // 定义响应信息
        res.json(responseData);                      // 以JSON形式响应报文内容
        return;                                      // 返回响应报文
    }
    
    User.findOne({                                   // 查找数据库用户名是否存在该用户名
        username: username                         
    }).then(function(userInfo){                      // 验证后把结果返回
        if(userInfo){                                // 判断是否存在相同用户名
            responseData.code = 4;                   // 定义响应码
            responseData.message = "用户名已被注册！"; // 定义响应信息
            res.json(responseData);                  // 以JSON形式响应报文内容
            return;                                  // 返回响应报文
        }
        var user = new User({                        // 若没有则以用户模型新建用户对象
            username: username,                      // 用户名为注册用户名
            password: password                       // 用户密码为注册用户密码
        });
        return user.save();                          // 返回该用户并调用方法将改用户存储至数据库
    }).then(function(){                              
        responseData.message = "注册成功！";          // 定义响应信息 
        res.json(responseData);                      // 返回响应报文
    });
});

module.exports = router;