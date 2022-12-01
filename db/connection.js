const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Password',
        database: 'election2'
    },
    console.log('Connected to the election2 database.')
);


module.exports = db;