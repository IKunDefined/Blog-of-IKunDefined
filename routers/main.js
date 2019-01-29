const express = require("express");
const router = express.Router();
const Content = require("../models/Content");
const User = require("../models/User");

var isAdmin;

router.use(function(req, res, next) {
    if (req.userInfo) {
        User.findOne({
            username: req.userInfo.username
        }).then(function(userInfo) {
            console.log(req.userInfo)
            isAdmin = userInfo.isAdmin;
            next();
        });
    } else {
        next();
    }  
})

router.get("/", function(req, res){
    Content.find().then(function(contentInfo) {
        if (!contentInfo.length) {
            res.render("main/index", {
                userInfo: req.userInfo,
                isAdmin: isAdmin,
                contents: null
            });
        } else {
            res.render("main/index", {
                userInfo: req.userInfo,
                isAdmin: isAdmin,
                contents: contentInfo
            });
        }
    });
});

module.exports = router;