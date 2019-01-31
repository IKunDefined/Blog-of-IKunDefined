const User = require('../../models/User')

module.exports = (req, res) => {
  let responseData
  responseData = {
    code: 0,
    message: ''
  }
  let username = req.body.body.username
  let password = req.body.body.password

  if (username === '' || password === '') {
    responseData.code = 1
    responseData.message = '用户名或密码不能为空'
    res.json(responseData)
    return
  }

  User.findOne({
    username: username
  }).then(function (userInfo) {
    if (userInfo) {
      responseData.code = 3
      responseData.message = '用户名已存在'
      res.json(responseData)
    } else {
      let user = new User({
        username: username,
        password: password
      })
      user.save()
      responseData.message = '添加成功'
      res.json(responseData)
    }
  })
}
