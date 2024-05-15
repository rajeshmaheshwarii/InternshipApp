// internshipController.js
const db = require('../config/db');

// Controller methods
const internshipController = {
  // Get all internships
  getAllInternships: (req, res) => {
    db.query('SELECT * FROM internships', (error, results) => {
      if (error) {
        console.error('Error fetching internships:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  },
  // Get internship by ID
  getInternshipById: (req, res) => {
    const internshipId = req.params.id;
    db.query('SELECT * FROM internships WHERE id = ?', [internshipId], (error, results) => {
      if (error) {
        console.error('Error fetching internship:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'Internship not found' });
      } else {
        res.json(results[0]);
      }
    });
  },
  // Create a new internship
  createInternship: (req, res) => {
    const newInternship = req.body;
    db.query('INSERT INTO internships SET ?', [newInternship], (error, results) => {
      if (error) {
        console.error('Error creating internship:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        newInternship.id = results.insertId;
        res.status(201).json(newInternship);
      }
    });
  },
  // Update internship by ID
  updateInternshipById: (req, res) => {
    const internshipId = req.params.id;
    const updatedInternship = req.body;
    db.query('UPDATE internships SET ? WHERE id = ?', [updatedInternship, internshipId], (error, results) => {
      if (error) {
        console.error('Error updating internship:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Internship not found' });
      } else {
        res.json(updatedInternship);
      }
    });
  },
  // Delete internship by ID
  deleteInternshipById: (req, res) => {
    const internshipId = req.params.id;
    db.query('DELETE FROM internships WHERE id = ?', [internshipId], (error, results) => {
      if (error) {
        console.error('Error deleting internship:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Internship not found' });
      } else {
        res.json({ message: 'Internship deleted successfully' });
      }
    });
  }
};

module.exports = internshipController;
