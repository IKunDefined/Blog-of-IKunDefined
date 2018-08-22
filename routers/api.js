var express = require("express");
var router = express.Router();

router.get("/register", function(req, res, next){
    res.send("register page");
});

module.exports = router;