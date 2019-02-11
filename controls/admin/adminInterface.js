const User = require('../../models/User')

module.exports = function (req, res) {
  if (req.userInfo) {
    User.findOne({
      username: req.userInfo.username
    }).then(function (userInfo) {
      req.userInfo.isAdmin = userInfo.isAdmin
      if (req.userInfo.isAdmin) {
        res.redirect('http://localhost:8080')
      } else {
        res.render('jump')
      }
    })
  } else {
    res.render('jump')
  }
}
