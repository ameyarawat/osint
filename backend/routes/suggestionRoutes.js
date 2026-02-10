const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to the suggestions file
const suggestionsFile = path.join(__dirname, '../suggestions.txt');

// @desc    Submit a new suggestion
// @route   POST /api/suggestions
// @access  Public
router.post('/', (req, res) => {
    const { suggestion } = req.body;

    if (!suggestion) {
        return res.status(400).json({ message: 'Please provide a suggestion' });
    }

    const newEntry = `[${new Date().toISOString()}] ${suggestion}\n`;

    fs.appendFile(suggestionsFile, newEntry, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ message: 'Server Error' });
        }
        res.status(201).json({ message: 'Suggestion received' });
    });
});

module.exports = router;
