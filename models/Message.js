const mongoose = require('mongoose')
const messageSchema = require('../schemas/message')

module.exports = mongoose.model('Message', messageSchema)
