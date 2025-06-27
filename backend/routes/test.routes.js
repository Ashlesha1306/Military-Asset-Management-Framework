const { Asset, Transfer } = require('../models');
const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/auth.middleware');
const { allowRoles } = require('../middlewares/rbac.middleware');

router.get(
  '/protected',
  verifyToken,
  allowRoles('admin', 'commander'),
  (req, res) => {
    res.json({ message: `Hello ${req.user.role}, you're authorized!` });
  }
);
router.get(
  '/summary',
  verifyToken,
  allowRoles('admin', 'commander'),
  async (req, res) => {
    try {
      const assetCount = await Asset.count();
      const transferCount = await Transfer.count();
      res.json({ assetCount, transferCount });
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch summary', error: err.message });
    }
  }
);

module.exports = router;

