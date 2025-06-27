import { useEffect, useState } from 'react';
import axios from '../api/axios';
import Navbar from '../components/navbar';

export default function Dashboard() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/test/summary', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSummary(res.data);
      } catch (err) {
        alert('Unauthorized. Please login again.');
        window.location.href = '/';
      }
    };

    fetchSummary();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-xl mx-auto mt-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Dashboard Summary</h1>
        {summary ? (
          <>
            <p>Total Assets: <strong>{summary.assetCount}</strong></p>
            <p>Total Transfers: <strong>{summary.transferCount}</strong></p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

