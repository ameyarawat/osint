const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Tool = require('../models/Tool');

// Path to the suggestions file
const suggestionsFile = path.join(__dirname, '../suggestions.txt');

// @desc    Submit a new suggestion
// @route   POST /api/suggestions
// @access  Public
router.post('/', async (req, res) => {
    const { suggestion } = req.body;

    if (!suggestion) {
        return res.status(400).json({ message: 'Please provide a suggestion' });
    }

    try {
        // Check if tool already exists (case-insensitive fuzzy match)
        // We fetch all tools to check if any existing tool name is contained in the suggestion
        // This is not efficient for huge datasets but fine for this scale
        const tools = await Tool.find({}, 'tool_name');

        const existingTool = tools.find(tool =>
            suggestion.toLowerCase().includes(tool.tool_name.toLowerCase())
        );

        if (existingTool) {
            return res.status(409).json({
                message: `Tool "${existingTool.tool_name}" is already available!`
            });
        }

        const newEntry = `[${new Date().toISOString()}] ${suggestion}\n`;

        fs.appendFile(suggestionsFile, newEntry, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(201).json({ message: 'Suggestion received' });
        });

    } catch (error) {
        console.error('Error checking duplicates:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
