const { Transfer, Asset } = require('../models');

exports.createTransfer = async (req, res) => {
  try {
    const { fromBase, toBase, assetId, quantity } = req.body;

    // 🔎 Fetch the asset
    const asset = await Asset.findByPk(assetId);
    if (!asset) return res.status(404).json({ message: 'Asset not found' });

    // ❌ Check if enough quantity is available
    if (asset.base !== fromBase || asset.quantity < quantity) {
      return res.status(400).json({ message: 'Insufficient quantity or wrong base' });
    }

    // ➖ Deduct quantity from sender base
    asset.quantity -= quantity;
    await asset.save();

    // ➕ Create asset at destination base if not exists
    const [destAsset, created] = await Asset.findOrCreate({
      where: { name: asset.name, base: toBase },
      defaults: { type: asset.type, quantity: 0 }
    });

    destAsset.quantity += quantity;
    await destAsset.save();

    // 🔄 Record the transfer
    const transfer = await Transfer.create({
      fromBase,
      toBase,
      assetId,
      quantity
    });

    res.status(201).json({ message: 'Transfer successful', transfer });
  } catch (err) {
    res.status(500).json({ message: 'Transfer failed', error: err.message });
  }
};

exports.getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.findAll();
    res.status(200).json(transfers);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get transfers', error: err.message });
  }
};
