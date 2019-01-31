const Category = require("../../models/Category");

module.exports = function (req, res) {
    let responseData;
    responseData = {
        code: 0,
        message: ""
    }
  var id = req.body.body.id;
  Category.deleteOne({
      _id: id
  }).then(function (successInfo) {
      if (successInfo.ok) {
          responseData.message = "分类删除成功";
          res.json(responseData);
      }
  });
}