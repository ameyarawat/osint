const express = require('express');
const router = express.Router();
const {
    addSearchHistory,
    addToolHistory,
    getHistory,
    clearSearchHistory,
    clearToolHistory
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/history/search', protect, addSearchHistory);
router.post('/history/tool', protect, addToolHistory);
router.get('/history', protect, getHistory);
router.delete('/history/search', protect, clearSearchHistory);
router.delete('/history/tool', protect, clearToolHistory);
router.get('/', protect, admin, require('../controllers/userController').getUsers);

module.exports = router;
