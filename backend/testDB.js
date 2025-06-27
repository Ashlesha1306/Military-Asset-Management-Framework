const { Sequelize } = require('sequelize');

// same details as in config.json
const sequelize = new Sequelize('military_assets', 'postgres', 'Ashlesha', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Database connection failed:', err));
