const Message = require("../../models/Message");

module.exports = function(req, res) {
  var responseData = {};
  responseData = {
      code: 0,
      message: ""
  };
  var content = req.body.content;
  if (content === "") {
      responseData.code = 1;
      responseData.message = "留言内容不能为空";
      res.json(responseData);
      return;
  }
  var message = new Message({
      content: content,
      author: req.userInfo.username,
      date: Date()
  });
  message.save();
  responseData.message = "留言成功";
  res.json(responseData);
}