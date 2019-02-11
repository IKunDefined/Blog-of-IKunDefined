const adminInterface = require('./adminInterface')
const adminGetUser = require('./adminGetUser')
const adminAddUser = require('./adminAddUser')
const adminDelUser = require('./adminDelUser')
const adminGetCate = require('./adminGetCate')
const adminAddCate = require('./adminAddCate')
const adminDelCate = require('./adminDelCate')
const adminGetCont = require('./adminGetCont')
const adminAddCont = require('./adminAddCont')
const adminDelCont = require('./adminDelCont')
const adminGetDyna = require('./adminGetDyna')
const adminDelDyna = require('./adminDelDyna')
const adminGetMess = require('./adminGetMess')
const adminDelMess = require('./adminDelMess')

const adminController = {
  adminInterface,
  adminGetUser,
  adminAddUser,
  adminDelUser,
  adminGetCate,
  adminAddCate,
  adminDelCate,
  adminGetCont,
  adminAddCont,
  adminDelCont,
  adminGetDyna,
  adminDelDyna,
  adminGetMess,
  adminDelMess
}

module.exports = adminController
