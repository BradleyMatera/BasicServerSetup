const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const router = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', router);

// Global error handler — must have 4 arguments to be recognized by Express
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;