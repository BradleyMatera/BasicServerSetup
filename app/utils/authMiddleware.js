const User = require('../models/userModel');

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  const userId = req.headers['x-user-id'];

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = User.findById(parseInt(userId));

  if (!user) {
    return res.status(401).json({ message: 'Invalid user ID' });
  }

  req.user = user;
  next();
}

module.exports = isAuthenticated;