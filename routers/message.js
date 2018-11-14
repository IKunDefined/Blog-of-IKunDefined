const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

var responseData = {};

router.use(function(req, res, next) {
    responseData = {
        code: 0,
        message: ""
    };
    next();
})

router.get("/", function(req, res) {
    Message.find().then(function (messageInfo) {
        if (messageInfo) {
            res.render("main/message", {
                userInfo: req.userInfo,
                messages: messageInfo
            });
        } else {
            res.render("main/message", {
                userInfo: req.userInfo,
                messages: null
            });
        }
    });
});

router.post("/post", function(req, res) {
    var content = req.body.content;
    if (content === "") {
        responseData.code = 1;
        responseData.message = "留言内容不能为空";
        res.json(responseData);
        return;
    }
    var message = new Message({
        content: content,
        author: req.userInfo.username,
        date: Date()
    });
    message.save();
    responseData.message = "留言成功";
    res.json(responseData);
});

module.exports = router;