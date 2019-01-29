const express = require("express");
const router = express.Router();
const userController = require('../controls/user')

router.post("/register", userController.userRegister);
router.post("/login", userController.userLogin);
router.get("/logout", userController.userLogout);

module.exports = router;
