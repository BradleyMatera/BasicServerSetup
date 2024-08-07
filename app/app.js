const express = require('express'); // Importing express module
// The express module is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

const app = express(); // Creating an express app instance
// The app object is an instance of the express application

const router = require('./routes'); // Importing routes
// The routes are defined in another file (./routes) and imported here to keep the code modular and organized

app.use(express.json()); // Middleware to parse JSON bodies of incoming requests
// The express.json() middleware parses incoming requests with JSON payloads and is based on body-parser
// This middleware is used to parse the body of the request so that we can access it in req.body

// Route to handle GET requests at the base URL ('/')
app.get('/', (req, res) => {
    console.log('GET request received'); // Logging GET request
    // Logs a message to the console indicating that a GET request was received at the base URL

    res.json({ message: 'Welcome to the API' }); // Sending JSON response
    // Sends a JSON response with a welcome message
});

// Using the imported router for all routes starting with '/api'
app.use('/api', router); // Prefix all routes with /api
// This tells the app to use the imported router for any route that starts with /api
// The router handles all the routes defined in the ./routes file

module.exports = app; // Exporting the express app
// This exports the app object so it can be imported and used in other files, like server.js