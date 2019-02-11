const Dynamic = require('../../models/Dynamic')

module.exports = function (req, res) {
  let responseData
  responseData = {
    code: 0,
    message: ''
  }
  let id = req.body.body.id
  Dynamic.deleteOne({
    _id: id
  }).then(function (successInfo) {
    if (successInfo.ok) {
      responseData.message = '动态删除成功'
      res.json(responseData)
    }
  })
}
