const Message = require('../../models/Message')

module.exports = function (req, res) {
  Message.find().then(function (messageInfo) {
    if (messageInfo) {
      res.render('message', {
        userInfo: req.userInfo,
        messages: messageInfo
      })
    } else {
      res.render('message', {
        userInfo: req.userInfo,
        messages: null
      })
    }
  })
}
