const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
  host: 'localhost',
  user: 'root',
  database: 'sql-introduction',
  password: '',
});

module.exports = sequelize;
