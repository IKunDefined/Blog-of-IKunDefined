const express = require('express')
const router = express.Router()
const User = require("../../models/User");

router.use(function (req, res, next) {
  if (req.userInfo) {
      User.findOne({
          username: req.userInfo.username
      }).then(function (userInfo) {
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

module.exports = function (req, res) {
  res.render("admin/index");
}