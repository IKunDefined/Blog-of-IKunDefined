const Content = require('../../models/Content')
const User = require('../../models/User')

module.exports = function (req, res) {
  let isAdmin
  if (req.userInfo) {
    User.findOne({
      username: req.userInfo.username
    }).then(function (userInfo) {
      isAdmin = userInfo.isAdmin
    })
  }
  Content.find().then(function (contentInfo) {
    if (!contentInfo.length) {
      res.render('index', {
        userInfo: req.userInfo,
        isAdmin: isAdmin,
        contents: null
      })
    } else {
      res.render('index', {
        userInfo: req.userInfo,
        isAdmin: isAdmin,
        contents: contentInfo
      })
    }
  })
}
