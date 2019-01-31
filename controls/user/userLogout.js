module.exports = (req, res) => {
  let responseData
  responseData = {
    code: 0,
    message: ''
  }
  req.cookies.set('userInfo', null)
  responseData.message = '注销成功'
  res.json(responseData)
}
