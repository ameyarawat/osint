const express = require('express');
const router = express.Router();
const {
    getTools,
    getToolById,
    createTool,
    updateTool,
    deleteTool,
    getCategories
} = require('../controllers/toolController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getTools).post(protect, admin, createTool);
router.route('/categories/all').get(getCategories);
router
    .route('/:id')
    .get(getToolById)
    .put(protect, admin, updateTool)
    .delete(protect, admin, deleteTool);

module.exports = router;
