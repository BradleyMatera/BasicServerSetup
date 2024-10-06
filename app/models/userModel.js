const bcrypt = require('bcryptjs');

// In-memory user store
const users = [];

// User Model
class User {
  constructor(username, password) {
    this.id = users.length + 1;
    this.username = username;
    this.password = password; // Should be hashed
  }

  static async create(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User(username, hashedPassword);
    users.push(newUser);
    return newUser;
  }

  static findByUsername(username) {
    return users.find((user) => user.username === username);
  }

  static findById(id) {
    return users.find((user) => user.id === id);
  }

  static verifyPassword(user, password) {
    return bcrypt.compare(password, user.password);
  }
}

module.exports = User;