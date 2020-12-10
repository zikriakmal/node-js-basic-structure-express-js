const mysql = require('mysql');
const migration = require('mysql-migrations');
require('dotenv/config')

const connection =mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    passowrd: process.env.DB_PASS,
    database: process.env.DB_NAME
});


migration.init(connection, __dirname + '/migrations', function() {
  console.log("finished running migrations");
});