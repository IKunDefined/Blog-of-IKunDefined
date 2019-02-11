const Content = require('../../models/Content')

module.exports = function (req, res) {
  Content.find().then(function (contentList) {
    let responseData
    responseData = {
      code: 0,
      message: '',
      contentList: contentList
    }
    res.json(responseData)
  })
}
