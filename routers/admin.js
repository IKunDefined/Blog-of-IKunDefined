var express = require("express");
var router = express.Router();

router.get("/user", function(req, res, next){
    res.send("user page");
});

router.get("/category", function(req, res, next){
    res.send("category management");
});

router.get("/article", function(req, res, next){
    res.send("article management");
});

router.get("/comment", function(req, res, next){
    res.send("comment management");
});

module.exports = router;