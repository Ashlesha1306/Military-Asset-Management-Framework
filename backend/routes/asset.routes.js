const express = require('express');
const router = express.Router();

const { createAsset, getAllAssets } = require('../controllers/asset.controller');
const { verifyToken } = require('../middlewares/auth.middleware');
const { allowRoles } = require('../middlewares/rbac.middleware');

// Routes
router.post('/', verifyToken, allowRoles('admin', 'commander'), createAsset);
router.get('/', verifyToken, getAllAssets);

// ✅ Must export like this
module.exports = router;

