const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Signup a new user
router.post('/signup', (req, res) => {
    const { username, password, fname, lname } = req.body;
    User.create(username, password, fname, lname, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'User created successfully!' });
    });
});

// يمكنك إضافة راوت تسجيل الدخول هنا.

module.exports = router;
