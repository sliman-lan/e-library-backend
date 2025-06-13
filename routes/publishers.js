const express = require('express');
const Publisher = require('../models/Publisher');
const router = express.Router();

// add new publisher
router.post('/', (req, res) => {
    const { pName, city} = req.body;
    Publisher.create(pName, city, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Publisher added successfully!' });
    });
});


// show publishers
router.get('/', (req, res) => {
    Publisher.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
});


// show book by title author
router.get('/search', (req, res) => {
    const titlePart = req.query.pName; // الحصول على جزء العنوان من الاستعلام
    if (!titlePart) {
        return res.status(400).json({ message: 'Title part is required' });
    }
    Publisher.searchByTitle(titlePart, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
});

module.exports = router;