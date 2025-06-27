import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-lg font-semibold">Military Asset System</div>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/assets">Assets</Link>
        <Link to="/transfers">Transfers</Link>
        <Link to="/assignments">Assignments</Link>
        <button onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }} className="bg-red-600 px-3 py-1 rounded">Logout</button>
      </div>
    </nav>
  );
}
