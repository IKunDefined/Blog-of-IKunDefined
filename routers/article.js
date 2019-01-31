const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

router.use(function(req, res, next) {
    router.get(req.url, function(req, res) {
        Content.findOne({
            _id: req.url.substr(1)
        }).then(function(contentInfo) {
            res.render("main/article", {
                contentInfo: contentInfo
            });
        });
    });
    next();
})

module.exports = router;
