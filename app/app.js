const express = require('express'); // Importing express module
// The express module is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

const app = express(); // Creating an express app instance(TEMMORARY) like in video games, its a single use dugeon and is finished after use
// The app object is an instance of the express application

const router = require('./routes'); // Importing routes
// The routes are defined in another file (./routes) and imported here to keep the code modular and organized

// Middleware to parse JSON bodies of incoming requests
app.use(express.json()); 
// The express.json() middleware parses incoming requests with JSON payloads and is based on body-parser
// This middleware is responsible for parsing the body of the request so that we can access it in req.body

// Route to handle GET requests at the base URL ('/')
app.get('/', (req, res) => {
    console.log('GET request received'); // Logging GET request
    // Logs a message to the console indicating that a GET request was received at the base URL

    res.json({ message: 'API service is up and running!' }); // Sending JSON response
    // Sends a JSON response with a welcome message
});

app.post('/', (req, res) => {
    console.log('POST request received'); // Logging POST request
    // Logs a message to the console indicating that a POST request was received at the base URL

    res.json({ message: 'POST request received' }); // Sending JSON response
    // Sends a JSON response confirming that a POST request was received
});

app.put('/', (req, res) => {
    console.log('PUT request received'); // Logging PUT request
    // Logs a message to the console indicating that a PUT request was received at the base URL

    res.json({ message: 'PUT request received' }); // Sending JSON response
    // Sends a JSON response confirming that a PUT request was received
});

app.delete('/', (req, res) => {
    console.log('DELETE request received'); // Logging DELETE request
    // Logs a message to the console indicating that a DELETE request was received at the base URL

    res.json({ message: 'DELETE request received' }); // Sending JSON response
    // Sends a JSON response confirming that a DELETE request was received
});

// Using the imported router for all routes starting with '/api'
app.use('/api', router); // Prefix all routes with /api
// This tells the app to use the imported router for any route that starts with /api
// The router handles all the routes defined in the ./routes file
// This setup helps keep the code organized and separates the route handling logic from the main app file

module.exports = app; // Exporting the express app
// This exports the app object so it can be imported and used in other files, like server.js