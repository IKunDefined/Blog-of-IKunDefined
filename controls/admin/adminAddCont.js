const Content = require("../../models/Content");

module.exports = function (req, res) {
  let responseData;
  responseData = {
    code: 0,
    message: ""
  }
  let title = req.body.body.title;
  let summary = req.body.body.summary;
  let article = req.body.body.article;
  console.log(req.cookies.get('userInfo'))
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
      let content = new Content({
        title: title,
        summary: summary,
        article: article,
        author: JSON.parse(req.cookies.get("userInfo")).username,
        date: Date()
      });
      content.save();
      responseData.message = "文章发布成功";
      res.json(responseData);
    }
  });
}