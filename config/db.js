const mysql = require('mysql');
const dbConfig = require('./db.config.js');

const connection = mysql.createConnection({
    host : dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port:3306
})

connection.connect(error=>{
    if(error) throw error;
    console.log('mysql db connected');
})

module.exports =  connection;