const indexInterface = require('./indexInterface')
const dynamicInterface = require('./dynamicInterface')
const dynamicUpdate = require('./dynamicUpdate')
const messageInterface = require('./messageInterface')
const messageUpdate = require('./messageUpdate')
const aboutInterface = require('./aboutInterface')
const demoInterface = require('./demoInterface')
const resumeInterface = require('./resumeInterface')

const mainController = {
  indexInterface,
  dynamicInterface,
  dynamicUpdate,
  messageInterface,
  messageUpdate,
  aboutInterface,
  demoInterface,
  resumeInterface
}

module.exports = mainController
