// routes/serviceRoutes.js
const express = require('express');
const { list, create, update, remove } = require('../controllers/serviceController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, list);
router.post('/', authMiddleware, create);
router.patch('/:id', authMiddleware, update);
router.delete('/:id', authMiddleware, remove);

module.exports = router;