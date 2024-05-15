// authController.js
const db = require('../config/db');
const bcrypt = require('bcrypt');

// Controller methods
const authController = {
  // User registration
  registerUser: (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      // Store the hashed password in the database
      const newUser = { name, email, password: hash };
      db.query('INSERT INTO users SET ?', [newUser], (error, results) => {
        if (error) {
          console.error('Error registering user:', error);
          return res.status(500).json({ message: 'Internal server error' });
        }

        newUser.id = results.insertId;
        res.status(201).json(newUser);
      });
    });
  },

  // User authentication
  authenticateUser: (req, res) => {
    const { email, password } = req.body;

    // Retrieve user from the database
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) {
        console.error('Error authenticating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const user = results[0];

      // Compare hashed password with provided password
      bcrypt.compare(password, user.password, (err, match) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }

        if (!match) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Authentication successful
        res.json({ message: 'Authentication successful' });
      });
    });
  },

  // User logout
  logoutUser: (req, res) => {
    // No action required for logout in this example
    res.json({ message: 'User logout successful' });
  }
};

module.exports = authController;
