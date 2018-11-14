var mongoose = require("mongoose");
var dynamicSchema = require("../schemas/dynamic");

module.exports = mongoose.model("Dynamic", dynamicSchema);