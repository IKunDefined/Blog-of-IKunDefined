const express = require('express')
const markdown = require('markdown').markdown
const router = express.Router()
const Content = require('../models/Content')

router.use(function (req, res) {
  Content.findOne({
    _id: req.url.substr(1)
  }).then(function (contentInfo) {
    res.render('article', {
      contentInfo: contentInfo,
      article: markdown.toHTML(contentInfo.article)
    })
  })
})

module.exports = router
