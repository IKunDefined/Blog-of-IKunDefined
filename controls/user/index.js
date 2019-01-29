const userRegister = require('./userRegister');
const userLogin = require('./userLogin');
const userLogout = require('./userLogout');

const userController = {
  userRegister,
  userLogin,
  userLogout
}

module.exports = userController;
