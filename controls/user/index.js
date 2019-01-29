const register = require('./register');
const login = require('./login');
const logout = require('./logout');

const userController = {
  register,
  login,
  logout
}

module.exports = userController;