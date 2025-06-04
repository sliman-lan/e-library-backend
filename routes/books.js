const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Add new book
router.post('/', (req, res) => {
    const { title, type, price, pubId, authorId } = req.body;
    Book.create(title, type, price, pubId, authorId, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Book added successfully!' });
    });
});

// show all books
router.get('/', (req, res) => {
    Book.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
});

// show book by title route
router.get('/search', (req, res) => {
    const titlePart = req.query.title; // الحصول على جزء العنوان من الاستعلام
    if (!titlePart) {
        return res.status(400).json({ message: 'Title part is required' });
    }
    Book.searchByTitle(titlePart, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
});

module.exports = router;
