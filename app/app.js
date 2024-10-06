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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;