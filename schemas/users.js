var mongoose = require("mongoose");

// 用户表结构
module.exports = new mongoose.Schema({
    username: String,
    password: String
});