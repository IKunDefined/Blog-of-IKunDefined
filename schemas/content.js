const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  title: String,
  summary: String,
  article: String,
  author: String,
  date: String
})
