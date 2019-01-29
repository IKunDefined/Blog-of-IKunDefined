const Category = require("../../models/Category");

module.exports = function (req, res) {
  Category.find().then(function (categoryInfo) {
      if (!categoryInfo.length) {
          res.render("admin/category", {
            categories: null,
            isCategory: true
          });
      } else {
          res.render("admin/category", {
              categories: categoryInfo,
              isCategory: true
          });
      }
  });
}