const Message = require('../../models/Message')

module.exports = function (req, res) {
  Message.find().then(function (messageList) {
    let responseData
    responseData = {
      code: 0,
      message: '',
      messageList
    }
    res.json(responseData)
  })
}
