const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');

// Route to get all internships
router.get('/', internshipController.getAllInternships);

// Route to get an internship by ID
router.get('/:id', internshipController.getInternshipById);

// Route to create a new internship
router.post('/', internshipController.createInternship);

// Route to update an internship by ID
router.put('/:id', internshipController.updateInternshipById);

// Route to delete an internship by ID
router.delete('/:id', internshipController.deleteInternshipById);

module.exports = router;
