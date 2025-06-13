const db = require('../config/db');

const User = {
    create: (username, password, fname, lname, callback) => {
        const sql = 'INSERT INTO User (Username, Password, FName, LName) VALUES (?, ?, ?, ?)';
        db.query(sql, [username, password, fname, lname], callback);
    },
    findByUsername: (username, callback) => {
        const sql = 'SELECT * FROM User WHERE username = ?';
        db.query(sql, [username], (err, results) => {
            if (err) return callback(err);
            
            if (results.length > 0) {
                return callback(null, results[0]);
            }
            return callback(null, null);
        });
    }
};

module.exports = User;
