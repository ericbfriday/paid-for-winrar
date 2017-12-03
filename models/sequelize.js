const Sequelize = require('sequelize');
const sequelize = new Sequelize('testdatabase', 'root', 'buffy666', {
  dialect: 'mysql',
  host: 'localhost',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

User.findAll().then(users => {
  console.log(users);
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });