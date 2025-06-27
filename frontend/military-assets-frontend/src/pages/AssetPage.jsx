import { useEffect, useState } from 'react';
import axios from '../api/axios';
import Navbar from '../components/navbar';

export default function AssetPage() {
  const [assets, setAssets] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    quantity: '',
    base: ''
  });

  const fetchAssets = async () => {
    try {
      const res = await axios.get('/assets', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      setAssets(res.data);
    } catch (err) {
      alert('Failed to fetch assets');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/assets', formData, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      setFormData({ name: '', type: '', quantity: '', base: '' });
      fetchAssets();
    } catch (err) {
      alert('Failed to create asset');
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-xl font-bold mb-4">Assets</h1>

        {/* ➕ Asset Creation Form */}
        <form onSubmit={handleSubmit} className="space-y-3 bg-gray-100 p-4 rounded mb-6">
          <input
            type="text"
            placeholder="Asset Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
          <input
            type="text"
            placeholder="Base Location"
            value={formData.base}
            onChange={(e) => setFormData({ ...formData, base: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Asset
          </button>
        </form>

        {/* 📋 Asset List */}
        <div className="space-y-2">
          {assets.map((asset) => (
            <div key={asset.id} className="bg-white p-4 rounded shadow">
              <h2 className="font-bold">{asset.name}</h2>
              <p>Type: {asset.type}</p>
              <p>Quantity: {asset.quantity}</p>
              <p>Base: {asset.base}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
