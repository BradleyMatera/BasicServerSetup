const express = require('express');
const userController = require('../controllers/userController');
const timeController = require('../controllers/timeController');
const isAuthenticated = require('../utils/authMiddleware');

const router = express.Router();

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Time tracking routes
router.post('/clockin', isAuthenticated, timeController.clockIn);
router.post('/clockout', isAuthenticated, timeController.clockOut);
router.get('/timesheet', isAuthenticated, timeController.getTimesheet);

module.exports = router;