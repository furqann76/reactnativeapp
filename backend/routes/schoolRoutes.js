// server/routes/schoolRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all users
router.get('/', (req, res) => {
    db.query('SELECT * FROM school', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new user
router.post('/', (req, res) => {
    const { school_name, phone } = req.body;
    const query = 'INSERT INTO school (school_name,phone) VALUES (?, ?)';
    db.query(query, [school_name,phone], (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, school_name,phone});
    });
});

// Get user by ID
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM school WHERE id = ?', [req.params.id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});
router.delete('/:id' , (req,res) => {
    db.query('DELETE FROM school WHERE id = ?', [req.params.id], (err,results) => {
        if (err) throw err;
        res.json({ message: 'User deleted successfully' });
    });
});

module.exports = router;
