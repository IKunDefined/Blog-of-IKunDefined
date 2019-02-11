const Category = require('../../models/Category')

module.exports = function (req, res) {
  Category.find().then(function (categoryList) {
    let responseData
    responseData = {
      code: 0,
      message: '',
      categoryList
    }
    res.json(responseData)
  })
}
