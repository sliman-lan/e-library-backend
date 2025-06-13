const db = require('../config/db');

const Publisher = {
    create: (pname, city, callback) => {
        const sql = 'INSERT INTO Publisher (PName, City) VALUES (?, ?)';
        db.query(sql, [pname, city], callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM publisher';
        db.query(sql, callback);
    },
};

module.exports = Publisher;
