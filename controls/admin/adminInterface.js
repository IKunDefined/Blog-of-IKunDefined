const express = require('express')
const router = express.Router()
const User = require("../../models/User");

module.exports = function (req, res) {
    if (req.userInfo) {
        User.findOne({
            username: req.userInfo.username
        }).then(function (userInfo) {
            req.userInfo.isAdmin = userInfo.isAdmin;
            if (req.userInfo.isAdmin) {
                res.redirect("http://localhost:8080")
            } else {
                res.render("main/jump");
            }
        });
    } else {
        res.render("main/jump");
    }
    
}