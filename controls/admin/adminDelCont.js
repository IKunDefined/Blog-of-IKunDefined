const Content = require("../../models/Content");

module.exports = function (req, res) {
  let responseData;
  responseData = {
    code: 0,
    message: ""
  }
  let id = req.body.body.id;
  Content.deleteOne({
      _id: id
  }).then(function (successInfo) {
      if (successInfo.ok) {
          responseData.message = "文章删除成功";
          res.json(responseData);
      }
  });
}