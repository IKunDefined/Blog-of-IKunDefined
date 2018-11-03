var express = require("express");
var router = express.Router();
var User = require("../models/User");
var Category = require("../models/Category");
var Content = require("../models/Content");

var responseData = {};

router.use(function(req, res, next) {
    responseData.code = 0;
    responseData.message = "";
    next();
})

router.use(function(req, res, next) {
    if (req.userInfo){
        User.findOne({
            username: req.userInfo.username
        }).then(function(userInfo) {
            req.userInfo.isAdmin = userInfo.isAdmin;
            if (req.userInfo.isAdmin) {
                next();
            } else {
                res.render("main/jump");
            }
        });
    } else {
        res.render("main/jump");
    }
});

router.get("/", function(req, res) {
    res.render("admin/index");
});

router.get("/user", function(req, res) {
    User.find().then(function(userInfo) {
        res.render("admin/user", {
            users: userInfo,
            isUser: true
        });
    })
})

router.get("/category", function(req, res) {
    Category.find().then(function(categoryInfo) {
        if (!categoryInfo.length) {
            res.render("admin/category", {
                categories: null,
                isCategory: true
            });
        } else {
            res.render("admin/category", {
                categories: categoryInfo,
                isCategory: true
            });
        }
    });
});

router.post("/category/add", function(req, res) {
    var name = req.body.name;
    if (name === "") {
        responseData.code = 1;
        responseData.message = "分类名称不能为空";
        res.json(responseData);
        return;
    }
    Category.findOne({
        name: name
    }).then(function(categoryInfo) {
        if (categoryInfo) {
            responseData.code = 2;
            responseData.message = "已存在该分类名称";
            res.json(responseData);
            return
        } else {
            var category = new  Category({
                name: name
            });
            category.save();
            responseData.message = "分类添加成功";
            res.json(responseData);
        }
    });

})

router.get("/content", function(req, res) {
    Content.find().then(function(contentInfo) {
        if (!contentInfo.length) {
            res.render("admin/content", {
                contents: null,
                isContent: true
            });
        } else {
            res.render("admin/content", {
                contents: contentInfo,
                isContent: true,
            });
        }
    });
});

router.post("/content/add", function(req, res) {
    var title = req.body.title;
    var summary = req.body.summary;
    var article = req.body.article;
    if (title === "" || summary === "" || article === "") {
        responseData.code = 1;
        responseData.message = "文章名称、简介或内容姐不能为空";
        res.json(responseData);
        return;
    }
    Content.findOne({
        title: title
    }).then(function(contentInfo) {
        if (contentInfo) {
            responseData.code = 2;
            responseData.message = "文章名已存在";
            res.json(responseData);
            return;
        } else {
            var content = new Content({
                title: title,
                summary: summary,
                article: article,
                author: req.userInfo.username,
                date: Date()
            });
            content.save();
            responseData.message = "文章发布成功";
            res.json(responseData);
        }
    });
});

module.exports = router;