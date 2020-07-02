const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sql-introduction',
  password: '',
});

module.exports = connection.promise();
