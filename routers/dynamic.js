const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Dynamic = require("../models/Dynamic");

var responseData = {};
router.use(function (req, res, next) {
    responseData = {
        code: 0,
        message: ""
    }
    next();
});

router.get("/", function (req, res, next) {
    if (req.userInfo) {
        User.findOne({
            username: req.userInfo.username
        }).then(function (userInfo) {
            if (userInfo) {
                req.userInfo.isAdmin = userInfo.isAdmin;
                Dynamic.find().then(function (dynamicInfo) {
                    if (dynamicInfo.length) {
                        res.render("main/dynamic", {
                            userInfo: req.userInfo,
                            dynamics: dynamicInfo
                        });
                    } else {
                        res.render("main/dynamic", {
                            userInfo: req.userInfo
                        });
                    }
                });
            }
        });
    } else {
        res.render("main/dynamic", {
            userInfo: null
        });
    }
});

router.post("/post", function(req, res) {
    var content = req.body.content;
    if (content === "") {
        responseData.code = 1;
        responseData.message = "不能输入空数据";
        res.json(responseData);
        return;
    }
    var dynamic = new Dynamic({
        content: content,
        author: req.userInfo.username,
        date: Date()
    });
    dynamic.save();
    responseData.message = "发布成功";
    res.json(responseData);
});

module.exports = router;