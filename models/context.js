var sequelize = require('./sequelize.js');
var Sequelize = require('sequelize');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

module.exports = {
	User
};