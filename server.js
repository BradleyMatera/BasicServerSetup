const http = require('http'); // Importing http module
// The http module is a core module in Node.js that allows us to create an HTTP server

require('dotenv').config(); // Importing and configuring dotenv for environment variables
// dotenv is a module that loads environment variables from a .env file into process.env
// This helps keep sensitive configuration data (like API keys or database connection strings) separate from the code

const app = require('./app/app'); // Importing the express app
// The express app is defined in another file (./app/app) and is imported here
// This keeps the code modular and organized

// Creating and starting the HTTP server
http.createServer(app) // Creating an HTTP server and passing the express app as the request handler
    .listen(process.env.PORT, () => { // The server listens on the port specified in the environment variables
        // The listen method takes the port number and a callback function that runs once the server starts
        console.log(`Server is running on http://localhost:${process.env.PORT}`); // Logging server start message
        // This logs a message to the console indicating that the server is running and on which port
        // Template literals (enclosed in backticks `) are used to include the value of process.env.PORT in the message
    });