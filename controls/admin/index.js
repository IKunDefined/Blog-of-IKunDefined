const adminInterface = require('./adminInterface');
const adminGetUser = require('./adminGetUser');
const adminDelUser = require('./adminDelUser');
const adminGetCate = require('./adminGetCate');
const adminAddCate = require('./adminAddCate');
const adminDelCate = require('./adminDelCate');
const adminGetCont = require('./adminGetCont');
const adminAddCont = require('./adminAddCont');
const adminDelCont = require('./adminDelCont');

const adminController = {
  adminInterface,
  adminGetUser,
  adminDelUser,
  adminGetCate,
  adminAddCate,
  adminDelCate,
  adminGetCont,
  adminAddCont,
  adminDelCont
}

module.exports = adminController;
