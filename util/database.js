const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'labUser',
    database: 'ThisIsA01645576sRepo',
    password: 'wopwd',
});

module.exports = pool.promise();