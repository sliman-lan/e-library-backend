const db = require('../config/db');

const User = {
    create: (username, password, fname, lname, callback) => {
        const sql = 'INSERT INTO User (Username, Password, FName, LName) VALUES (?, ?, ?, ?)';
        db.query(sql, [username, password, fname, lname], callback);
    },
    // يمكنك إضافة المزيد من الوظائف مثل findById، findByUsername، إلخ.
};

module.exports = User;
