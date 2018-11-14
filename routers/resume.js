const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("main/resume");
});

module.exports = router;