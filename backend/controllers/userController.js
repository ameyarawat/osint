const User = require('../models/User');

// @desc    Add query to search history
// @route   POST /api/users/history/search
// @access  Private
const addSearchHistory = async (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ message: 'Query is required' });
    }

    try {
        const user = await User.findById(req.user.id);

        // Remove duplicate if exists to push to top
        user.searchHistory = user.searchHistory.filter(h => h.query !== query);

        // Add new query to beginning
        user.searchHistory.unshift({ query });

        // Limit to 20
        if (user.searchHistory.length > 20) {
            user.searchHistory.pop();
        }

        await user.save();
        res.status(200).json(user.searchHistory);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Add tool to view history
// @route   POST /api/users/history/tool
// @access  Private
const addToolHistory = async (req, res) => {
    const { toolId } = req.body;

    if (!toolId) {
        return res.status(400).json({ message: 'Tool ID is required' });
    }

    try {
        const user = await User.findById(req.user.id);

        // Remove if already exists (to move to top)
        user.toolHistory = user.toolHistory.filter(h => h.tool.toString() !== toolId);

        // Add to beginning
        user.toolHistory.unshift({ tool: toolId });

        // Limit to 20
        if (user.toolHistory.length > 20) {
            user.toolHistory.pop();
        }

        await user.save();
        res.status(200).json(user.toolHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get user history
// @route   GET /api/users/history
// @access  Private
const getHistory = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('toolHistory.tool');
        res.status(200).json({
            searchHistory: user.searchHistory,
            toolHistory: user.toolHistory
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Clear search history
// @route   DELETE /api/users/history/search
// @access  Private
const clearSearchHistory = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.searchHistory = [];
        await user.save();
        res.status(200).json({ message: 'Search history cleared' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Clear tool history
// @route   DELETE /api/users/history/tool
// @access  Private
const clearToolHistory = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.toolHistory = [];
        await user.save();
        res.status(200).json({ message: 'Tool history cleared' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get all users (Admin only)
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    addSearchHistory,
    addToolHistory,
    getHistory,
    clearSearchHistory,
    clearToolHistory,
    getUsers
};
