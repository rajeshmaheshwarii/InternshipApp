// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for user login
router.post('/login', authController.authenticateUser);

// Route for user logout
router.post('/logout', authController.logoutUser);

module.exports = router;
