const Tool = require('../models/Tool');

// @desc    Get all tools
// @route   GET /api/tools
// @access  Public
const getTools = async (req, res) => {
    try {
        const { category, platform, license, search } = req.query; // 'license' maps to license_type

        let query = {};

        if (category) {
            query.category = category === 'Data Leaks' ? 'Data Leaks OSINT' : category;
        }

        if (platform) {
            query.platform_supported = platform;
        }

        if (license) {
            query.license_type = license;
        }

        if (search) {
            query.tool_name = { $regex: search, $options: 'i' };
        }

        const tools = await Tool.find(query).sort({ createdAt: -1 });
        res.json(tools);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single tool
// @route   GET /api/tools/:id
// @access  Public
const getToolById = async (req, res) => {
    try {
        const tool = await Tool.findById(req.params.id);

        if (tool) {
            res.json(tool);
        } else {
            res.status(404).json({ message: 'Tool not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a tool
// @route   POST /api/tools
// @access  Private/Admin
const createTool = async (req, res) => {
    try {
        const {
            tool_name,
            category,
            description,
            short_description,
            features,
            use_cases,
            installation_steps,
            usage_guide,
            official_website,
            download_link,
            platform_supported,
            license_type,
            tags,
        } = req.body;

        const tool = new Tool({
            user: req.user._id,
            tool_name,
            category,
            description,
            short_description,
            features,
            use_cases,
            installation_steps,
            usage_guide,
            official_website,
            download_link,
            platform_supported,
            license_type,
            tags,
        });

        const createdTool = await tool.save();
        res.status(201).json(createdTool);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a tool
// @route   PUT /api/tools/:id
// @access  Private/Admin
const updateTool = async (req, res) => {
    const tool = await Tool.findById(req.params.id);

    if (tool) {
        Object.assign(tool, req.body);
        const updatedTool = await tool.save();
        res.json(updatedTool);
    } else {
        res.status(404).json({ message: 'Tool not found' });
    }
};

// @desc    Delete a tool
// @route   DELETE /api/tools/:id
// @access  Private/Admin
const deleteTool = async (req, res) => {
    const tool = await Tool.findById(req.params.id);

    if (tool) {
        await tool.deleteOne();
        res.json({ message: 'Tool removed' });
    } else {
        res.status(404).json({ message: 'Tool not found' });
    }
};

// @desc    Get all categories
// @route   GET /api/tools/categories/all
// @access  Public
const getCategories = async (req, res) => {
    try {
        const categories = await Tool.distinct('category');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getTools,
    getToolById,
    createTool,
    updateTool,
    deleteTool,
    getCategories
};
