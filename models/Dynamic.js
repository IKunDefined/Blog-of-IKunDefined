const mongoose = require('mongoose')
const dynamicSchema = require('../schemas/dynamic')

module.exports = mongoose.model('Dynamic', dynamicSchema)
