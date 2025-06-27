import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AssetPage from './pages/AssetPage';
import TransferPage from './pages/TransferPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<AssetPage />} />
        <Route path="/transfers" element={<TransferPage />} />
      </Routes>
    </Router>
  );
}

export default App;



