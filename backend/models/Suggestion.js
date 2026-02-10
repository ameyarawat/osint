const mongoose = require('mongoose');

const suggestionSchema = mongoose.Schema({
    tool_name: {
        type: String,
        required: [true, 'Please add a tool name'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Suggestion', suggestionSchema);
