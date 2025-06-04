const db = require('../config/db');

const Publisher = {
    create: (pname, city, callback) => {
        const sql = 'INSERT INTO Publisher (PName, City) VALUES (?, ?)';
        db.query(sql, [pname, city], callback);
    },
    // يمكنك إضافة المزيد من الوظائف هنا.
};

module.exports = Publisher;
