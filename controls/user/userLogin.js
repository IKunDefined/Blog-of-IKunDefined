const User = require('../../models/User')

module.exports = (req, res) => {
  let responseData
  responseData = {
    code: 0,
    message: ''
  }
  let username = req.body.username
  let password = req.body.password
  if (username === '' || password === '') {
    responseData.code = 1
    responseData.message = '用户名或密码不能为空'
    res.json(responseData)
    return
  }
  User.findOne({
    username: username,
    password: password
  }).then(function (userInfo) {
    if (!userInfo) {
      responseData.code = 2
      responseData.message = '用户名或密码错误'
      res.json(responseData)
    } else {
      responseData.message = '登陆成功'
      req.cookies.set('userInfo', JSON.stringify({
        id: userInfo._id,
        username: userInfo.username
      }))
      res.json(responseData)
    }
  })
}
