const Content = require("../../models/Content");

module.exports = function (req, res) {
  Content.find().then(function (contentInfo) {
      if (!contentInfo.length) {
          res.render("admin/content", {
              contents: null,
              isContent: true
          });
      } else {
          res.render("admin/content", {
              contents: contentInfo,
              isContent: true,
          });
      }
  });
}