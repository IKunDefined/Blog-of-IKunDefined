const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const adminController = require('../controls/admin')

router.use(bodyParser.json())

router.get('/', adminController.adminInterface)
router.get('/user/get', adminController.adminGetUser)
router.post('/user/add', adminController.adminAddUser)
router.post('/user/delete', adminController.adminDelUser)
router.get('/category/get', adminController.adminGetCate)
router.post('/category/add', adminController.adminAddCate)
router.post('/category/delete', adminController.adminDelCate)
router.get('/content/get', adminController.adminGetCont)
router.post('/content/add', adminController.adminAddCont)
router.post('/content/delete', adminController.adminDelCont)
router.get('/dynamic/get', adminController.adminGetDyna)
router.post('dynamic/delete', adminController.adminDelDyna)
router.get('/message/get', adminController.adminGetMess)
router.post('/message/delete', adminController.adminDelMess)

module.exports = router
