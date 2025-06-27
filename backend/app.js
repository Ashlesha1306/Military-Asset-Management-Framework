const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Import your auth routes
const authRoutes = require('./routes/auth.routes');
const testRoutes = require('./routes/test.routes');
// Middleware to parse JSON
const assetRoutes = require('./routes/asset.routes');
const transferRoutes = require('./routes/transfer.routes');


app.use(express.json());




// Mount the auth routes at /api/auth
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/transfers', transferRoutes);
// Default route
app.get('/', (req, res) => {
  res.send(' Backend is running!');
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});


