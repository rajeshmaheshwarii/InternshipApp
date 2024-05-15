// userController.js
const db = require('../config/db');

// Controller methods
const userController = {
  // Get all users
  getAllUsers: (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
      if (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  },
  // Get user by ID
  getUserById: (req, res) => {
    const userId = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [userId], (error, results) => {
      if (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(results[0]);
      }
    });
  },
  // Create a new user
  createUser: (req, res) => {
    const newUser = req.body;
    db.query('INSERT INTO users SET ?', [newUser], (error, results) => {
      if (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        newUser.id = results.insertId;
        res.status(201).json(newUser);
      }
    });
  },
  // Update user by ID
  updateUserById: (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (error, results) => {
      if (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(updatedUser);
      }
    });
  },
  // Delete user by ID
  deleteUserById: (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], (error, results) => {
      if (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ message: 'User deleted successfully' });
      }
    });
  }
};

module.exports = userController;
