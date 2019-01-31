const User = require('../../models/User')

module.exports = function (req, res) {
  let responseData
  responseData = {
    code: 0,
    message: '',
    userList: []
  }
  User.find().then(function (userList) {
    responseData.userList = userList
    res.json(responseData)
    // res.render("admin/user", {
    //     users: userInfo,
    //     isUser: true
    // });
  })
}
