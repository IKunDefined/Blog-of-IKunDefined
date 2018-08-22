var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.render("index");
});

router.get("/view", function(req, res, next){
    res.send("content");
})

module.exports = router;