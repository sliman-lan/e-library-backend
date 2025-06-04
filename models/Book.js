const db = require('../config/db');

const Book = {
    create: (title, type, price, pubId, authorId, callback) => {
        const sql = 'INSERT INTO Book (Title, Type, Price, pubId, AuthorId) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [title, type, price, pubId, authorId], callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM Book';
        db.query(sql, callback);
    },
    // search in books by title
    searchByTitle: (titlePart, callback) => {
        const sql = 'SELECT * FROM Book WHERE Title LIKE ?';
        db.query(sql, [`%${titlePart}%`], callback);
    }
};

module.exports = Book;
