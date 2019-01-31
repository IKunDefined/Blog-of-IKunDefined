const User = require('../../models/User')

module.exports = (req, res) => {
  let responseData
  responseData = {
    code: 0,
    message: ''
  }
  let username = req.body.username
  let password = req.body.password
  let repassword = req.body.repassword

  if (username === '' || password === '') {
    responseData.code = 1
    responseData.message = '用户名或密码不能为空！'
    res.json(responseData)
    return
  }

  if (password !== repassword) {
    responseData.code = 2
    responseData.message = '两次输入密码不同！'
    res.json(responseData)
    return
  }

  User.findOne({
    username: username
  }).then(function (userInfo) {
    if (userInfo) {
      responseData.code = 3
      responseData.message = '用户名已被注册！'
      res.json(responseData)
    } else {
      let user = new User({
        username: username,
        password: password
      })
      user.save()
      responseData.message = '注册成功！'
      res.json(responseData)
    }
  })
}
