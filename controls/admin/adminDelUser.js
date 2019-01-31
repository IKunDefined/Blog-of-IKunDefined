const User = require('../../models/User')

module.exports = function (req, res) {
  let responseData
  responseData = {
    code: 0,
    message: ''
  }

  let id = req.body.body.id
  User.deleteOne({
    _id: id
  }).then(function (successInfo) {
    if (successInfo.ok) {
      responseData.message = '用户删除成功'
      res.json(responseData)
    }
  })
}
