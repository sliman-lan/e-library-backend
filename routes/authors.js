const express = require('express');
const Author = require('../models/Author');
const router = express.Router();

// add new author
router.post('/', (req, res) => {
    const { fname, lname, country, city, address } = req.body;
    Author.create(fname, lname, country, city, address, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Author added successfully!' });
    });
});

// show authors
router.get('/', (req, res) => {
    Author.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
});


module.exports = router;
