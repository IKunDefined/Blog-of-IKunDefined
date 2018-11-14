var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  content: String,
  author: String,
  date: String
});