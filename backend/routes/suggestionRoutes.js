const express = require('express');
const router = express.Router();
const Tool = require('../models/Tool');
const Suggestion = require('../models/Suggestion');

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

        // Check if suggestion is already pending
        const pendingSuggestion = await Suggestion.findOne({
            tool_name: { $regex: new RegExp(`^${suggestion}$`, 'i') },
            status: 'pending'
        });

        if (pendingSuggestion) {
            return res.status(409).json({
                message: 'This tool has already been suggested and is under review.'
            });
        }

        await Suggestion.create({
            tool_name: suggestion
        });

        res.status(201).json({ message: 'Suggestion received' });

    } catch (error) {
        console.error('Error handling suggestion:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
