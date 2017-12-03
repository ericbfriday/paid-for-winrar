'use strict';
const dotenv = require('dotenv');
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PFW_DATABASE, process.env.PFW_USERNAME, process.env.PFW_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });