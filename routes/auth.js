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

// Login a user
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // التحقق من وجود البيانات المطلوبة
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    
    
    User.findByUsername(username, (err, user) => {
        if (err) return res.status(500).json({ error: err });
        
        // إذا لم يتم العثور على المستخدم
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        
        // مقارنة كلمة المرور
     
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        
        
        return res.status(200).json({ message: 'Login successful!' });
    });
});

module.exports = router;
