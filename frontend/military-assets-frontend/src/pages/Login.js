import { useState } from 'react';
import axios from '../api/axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = async (e) => {
  e.preventDefault();
  console.log("Sending login request with:", { email, password });

  try {
    const res = await axios.post('/auth/login', { email, password });
    console.log("Login response:", res.data);

    localStorage.setItem('token', res.data.token);
    window.location.href = '/dashboard';
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    alert('Login failed');
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
        <input
          className="w-full p-2 mb-4 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          className="w-full p-2 mb-4 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
