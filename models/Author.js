const db = require('../config/db');

const Author = {
    create: (fname, lname, country, city, address, callback) => {
        const sql = 'INSERT INTO Author (Fname, Lname, Country, City, Address) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [fname, lname, country, city, address], callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM author';
        db.query(sql, callback);
    },
};

module.exports = Author;
