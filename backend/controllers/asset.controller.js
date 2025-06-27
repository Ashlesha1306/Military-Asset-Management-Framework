const { Asset } = require('../models');

exports.createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.status(201).json(asset);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create asset', error: err.message });
  }
};

exports.getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll();
    res.status(200).json(assets);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching assets', error: err.message });
  }
};
