// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all users
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new user
router.post('/', (req, res) => {
    const { first_name, last_name, email, phone, address , password} = req.body; //destructure
    const query = 'INSERT INTO users (first_name, last_name, email, phone, address , password) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [first_name, last_name, email, phone, address , password], (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, first_name, last_name, email, phone , address , password});
    });
});

// Get user by ID
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});
router.delete('/:id' , (req,res) => {
    db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err,results) => {
        if (err) throw err;
        res.json({ message: 'User deleted successfully' });
    });
});

module.exports = router;
