const express = require('express');
const router = express.Router();

const { createTransfer, getTransfers } = require('../controllers/transfer.controller');
const { verifyToken } = require('../middlewares/auth.middleware');
const { allowRoles } = require('../middlewares/rbac.middleware');

// ✅ Routes
router.post('/', verifyToken, allowRoles('admin', 'commander'), createTransfer);
router.get('/', verifyToken, getTransfers);

module.exports = router; // ✅ MUST be router only, not an object

