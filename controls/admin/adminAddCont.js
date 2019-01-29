const Content = require("../../models/Content");

module.exports = function (req, res) {
  let responseData;
  responseData = {
    code: 0,
    message: ""
  }
  var title = req.body.title;
  var summary = req.body.summary;
  var article = req.body.article;
  if (title === "" || summary === "" || article === "") {
      responseData.code = 1;
      responseData.message = "文章名称、简介或内容姐不能为空";
      res.json(responseData);
      return;
  }
  Content.findOne({
      title: title
  }).then(function (contentInfo) {
    if (contentInfo) {
      responseData.code = 2;
      responseData.message = "文章名已存在";
      res.json(responseData);
      return;
    } else {
      var content = new Content({
        title: title,
        summary: summary,
        article: article,
        author: req.userInfo.username,
        date: Date()
      });
      content.save();
      responseData.message = "文章发布成功";
      res.json(responseData);
    }
  });
}