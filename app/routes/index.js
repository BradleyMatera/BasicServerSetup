const express = require('express'); // Importing express module
const router = express.Router(); // Creating router object using express.Router()

let dataStore = []; // In-memory data store for simplicity

// Route to handle GET requests at the base URL ('/api')
// This endpoint returns all data stored in the dataStore array
router.get('/', (req, res) => {
    res.status(200).json(dataStore); // Sending JSON response with all data
    // HTTP Status 200 means the request was successful
    // The response contains the entire dataStore array in JSON format
});

// Route to handle GET requests with a city parameter ('/api/:city')
// This endpoint returns data for a specific city
router.get('/:city', (req, res) => {
    const { city } = req.params; // Extracting city parameter from request
    // req.params contains route parameters, in this case, 'city'
    
    const cityData = dataStore.filter(item => item.city === city); // Filtering data for the given city
    // dataStore.filter() creates a new array with all elements that match the city parameter
    
    if (cityData.length > 0) {
        // If cityData array is not empty, it means we found matching data
        res.status(200).json(cityData); // Sending JSON response with city data
        // HTTP Status 200 means the request was successful
        // The response contains the cityData array in JSON format
    } else {
        // If cityData array is empty, it means no matching data was found
        res.status(404).json({ message: `No data found for city: ${city}` }); // Sending 404 if city not found
        // HTTP Status 404 means the requested resource was not found
        // The response contains a JSON object with an error message
    }
});

// Route to handle POST requests at the base URL ('/api')
// This endpoint adds new data to the dataStore array
router.post('/', (req, res) => {
    const newData = req.body; // Extracting data from the request body
    // req.body contains the data sent by the client in a POST request
    
    if (!newData.id || !newData.city || !newData.value) { // Basic validation
        // Check if all required fields (id, city, value) are present in the request body
        return res.status(400).json({ message: 'ID, City, and Value are required' });
        // HTTP Status 400 means the request is invalid
        // The response contains a JSON object with an error message
    }
    
    dataStore.push(newData); // Adding new data to the store
    // dataStore.push() adds the new data to the end of the dataStore array
    
    res.status(201).json(newData); // Sending JSON response with status 201 (Created)
    // HTTP Status 201 means the request was successful and a new resource was created
    // The response contains the newly created data in JSON format
});

// Route to handle PUT requests to update data
// This endpoint updates existing data in the dataStore array based on the provided ID
router.put('/:id', (req, res) => {
    const { id } = req.params; // Extracting ID parameter from request
    // req.params contains route parameters, in this case, 'id'
    
    const updatedData = req.body; // Extracting updated data from the request body
    // req.body contains the data sent by the client in a PUT request
    
    const index = dataStore.findIndex(item => item.id === parseInt(id)); // Finding index of the item to update
    // dataStore.findIndex() returns the index of the first element that matches the condition
    // parseInt(id) converts the id parameter from string to integer
    
    if (index !== -1) {
        // If index is not -1, it means we found the item to update
        dataStore[index] = { ...dataStore[index], ...updatedData }; // Merging old data with updated data
        // { ...dataStore[index], ...updatedData } creates a new object by merging the old data with the updated data
        
        res.status(200).json(dataStore[index]); // Sending updated data
        // HTTP Status 200 means the request was successful
        // The response contains the updated data in JSON format
    } else {
        // If index is -1, it means no matching item was found
        res.status(404).json({ message: `No data found with id: ${id}` }); // Sending 404 if item not found
        // HTTP Status 404 means the requested resource was not found
        // The response contains a JSON object with an error message
    }
});

// Route to handle DELETE requests with an ID parameter ('/api/:id')
// This endpoint deletes data from the dataStore array based on the provided ID
router.delete('/:id', (req, res) => {
    const { id } = req.params; // Extracting ID parameter from request
    // req.params contains route parameters, in this case, 'id'
    
    const index = dataStore.findIndex(item => item.id === parseInt(id)); // Finding index of the item to delete
    // dataStore.findIndex() returns the index of the first element that matches the condition
    // parseInt(id) converts the id parameter from string to integer
    
    if (index !== -1) {
        // If index is not -1, it means we found the item to delete
        const deletedData = dataStore.splice(index, 1); // Removing item from data store
        // dataStore.splice(index, 1) removes one element at the specified index
        // The removed element is returned as an array with one element
        
        res.status(200).json(deletedData[0]); // Sending deleted data
        // HTTP Status 200 means the request was successful
        // The response contains the deleted data in JSON format
    } else {
        // If index is -1, it means no matching item was found
        res.status(404).json({ message: `No data found with id: ${id}` }); // Sending 404 if item not found
        // HTTP Status 404 means the requested resource was not found
        // The response contains a JSON object with an error message
    }
});

module.exports = router; // Exporting the router
// Exporting the router object so it can be used in other files