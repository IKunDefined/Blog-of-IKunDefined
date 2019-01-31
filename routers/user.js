const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const userController = require('../controls/user')

router.use(bodyParser.urlencoded({
  extended: true
}))

router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)
router.get('/logout', userController.userLogout)

module.exports = router
