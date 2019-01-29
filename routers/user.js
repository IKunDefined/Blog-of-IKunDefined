const express = require("express");
const router = express.Router();
const userController = require('../controls/user')

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

module.exports = router;
