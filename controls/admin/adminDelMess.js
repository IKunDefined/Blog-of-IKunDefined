const Message = require('../../models/Message')

module.exports = function (req, res) {
  let responseData
  responseData = {
    code: 0,
    message: ''
  }
  let id = req.body.body.id
  Message.deleteOne({
    _id: id
  }).then(function (successInfo) {
    if (successInfo.ok) {
      responseData.message = '留言删除成功'
      res.json(responseData)
    }
  })
}
