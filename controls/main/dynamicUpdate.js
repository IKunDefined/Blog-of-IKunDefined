const Dynamic = require('../../models/Dynamic')

module.exports = function (req, res) {
  let responseData = {}
  responseData = {
    code: 0,
    message: ''
  }
  let content = req.body.content
  if (content === '') {
    responseData.code = 1
    responseData.message = '不能输入空数据'
    res.json(responseData)
    return
  }
  let dynamic = new Dynamic({
    content: content,
    author: req.userInfo.username,
    date: Date()
  })
  dynamic.save()
  responseData.message = '发布成功'
  res.json(responseData)
}
