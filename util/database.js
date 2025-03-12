const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'labUser',
    database: 'labs',
    password: 'wopwd',
});

module.exports = pool.promise();