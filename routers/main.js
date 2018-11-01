const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

router.get("/", function(req, res){
    Content.find().then(function(contentInfo) {
        if (!contentInfo.length) {
            res.render("main/index", {
                userInfo: req.userInfo,
                contents: null 
            });
        } else {
            res.render("main/index", {
                userInfo: req.userInfo,
                contents: contentInfo
            });
        }
    });
});

module.exports = router;