// server/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'furqan',
    password: 'furqan123',
    database: 'furqan_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

module.exports = db;
