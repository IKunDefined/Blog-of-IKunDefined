const User = require("../../models/User");

module.exports = function (req, res) {
    User.find().then(function (userInfo) {
        res.render("admin/user", {
            users: userInfo,
            isUser: true
        });
    });
}