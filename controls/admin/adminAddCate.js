const Category = require("../../models/Category");

module.exports = function (req, res) {
  let responseData;
  responseData = {
    code: 0,
    message: ""
  }
  var name = req.body.name
  if (name === "") {
    responseData.code = 1;
    responseData.message = "分类名称不能为空";
    res.json(responseData);
    return;
  }
  Category.findOne({
    name: name
  }).then(function (categoryInfo) {
    if (categoryInfo) {
      responseData.code = 2;
      responseData.message = "已存在该分类名称";
      res.json(responseData);
      return;
    } else {
      var category = new Category({
        name: name
      });
      category.save();
      responseData.message = "分类添加成功";
      res.json(responseData);
    }
  });
}