const mongoose = require('mongoose');

const toolSchema = mongoose.Schema(
    {
        tool_name: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String, // e.g., 'People OSINT', 'Social Media'
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        short_description: {
            type: String, // For card view
        },
        features: [String],
        use_cases: [String],
        installation_steps: {
            type: String, // Markdown supported
        },
        usage_guide: {
            type: String, // Markdown supported
        },
        official_website: {
            type: String,
        },
        download_link: {
            type: String,
            required: true,
        },
        platform_supported: [String], // ['Windows', 'Linux', 'macOS']
        license_type: {
            type: String, // 'Free', 'Paid', 'Freemium'
            default: 'Free',
        },
        tags: [String],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User', // Tool added by which admin
        },
    },
    {
        timestamps: true,
    }
);

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
