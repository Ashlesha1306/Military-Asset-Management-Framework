import { useEffect, useState } from 'react';
import axios from '../api/axios';
import Navbar from '../components/navbar';

export default function TransferPage() {
  const [assets, setAssets] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const [formData, setFormData] = useState({
    assetId: '',
    fromBase: '',
    toBase: '',
    quantity: ''
  });

  const fetchAssets = async () => {
    const res = await axios.get('/assets', {
      headers: { Authorization: localStorage.getItem('token') }
    });
    setAssets(res.data);
  };

  const fetchTransfers = async () => {
    const res = await axios.get('/transfers', {
      headers: { Authorization: localStorage.getItem('token') }
    });
    setTransfers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/transfers', formData, {
        headers: { Authorization: localStorage.getItem('token') }
      });
      setFormData({ assetId: '', fromBase: '', toBase: '', quantity: '' });
      fetchTransfers();
    } catch (err) {
      alert('Transfer failed');
    }
  };

  useEffect(() => {
    fetchAssets();
    fetchTransfers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-xl font-bold mb-4">Transfer Assets</h1>

        {/* 🔄 Transfer Form */}
        <form onSubmit={handleSubmit} className="space-y-3 bg-gray-100 p-4 rounded mb-6">
          <select
            required
            value={formData.assetId}
            onChange={(e) => setFormData({ ...formData, assetId: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Asset</option>
            {assets.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name} ({a.base})
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="From Base"
            value={formData.fromBase}
            onChange={(e) => setFormData({ ...formData, fromBase: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="text"
            placeholder="To Base"
            value={formData.toBase}
            onChange={(e) => setFormData({ ...formData, toBase: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Transfer
          </button>
        </form>

        {/* 📋 Transfer Log */}
        <div className="space-y-2">
          {transfers.map((t) => (
            <div key={t.id} className="bg-white p-4 rounded shadow">
              <p><strong>Asset ID:</strong> {t.assetId}</p>
              <p><strong>From:</strong> {t.fromBase}</p>
              <p><strong>To:</strong> {t.toBase}</p>
              <p><strong>Quantity:</strong> {t.quantity}</p>
              <p><strong>Date:</strong> {new Date(t.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
