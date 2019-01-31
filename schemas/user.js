const mongoose = require('mongoose')

// 用户表结构
module.exports = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
})
