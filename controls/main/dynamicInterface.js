const User = require("../../models/User");
const Dynamic = require("../../models/Dynamic");

module.exports = function (req, res) {
  if (req.userInfo) {
      User.findOne({
          username: req.userInfo.username
      }).then(function (userInfo) {
          if (userInfo) {
              req.userInfo.isAdmin = userInfo.isAdmin;
              Dynamic.find().then(function (dynamicInfo) {
                  if (dynamicInfo.length) {
                      res.render("main/dynamic", {
                          userInfo: req.userInfo,
                          dynamics: dynamicInfo
                      });
                  } else {
                      res.render("main/dynamic", {
                          userInfo: req.userInfo
                      });
                  }
              });
          }
      });
  } else {
      res.render("main/dynamic", {
          userInfo: null
      });
  }
}