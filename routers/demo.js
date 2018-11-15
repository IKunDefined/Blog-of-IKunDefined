const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("main/demo");
});

router.get("/test", function(req, res) {
    res.render("demo/test");
});

module.exports = router;