const Dynamic = require('../../models/Dynamic')

module.exports = function (req, res) {
  Dynamic.find().then(function (dynamicList) {
    let responseData
    responseData = {
      code: 0,
      message: '',
      dynamicList
    }
    res.json(responseData)
  })
}
