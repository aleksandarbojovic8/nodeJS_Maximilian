const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'sql-introduction',
  'root',
  'sql-introduction',
  {
    dialect: 'mysql',
    host: 'localhost',
  }
);

module.exports = sequelize;
