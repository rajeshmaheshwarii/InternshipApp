// paymentController.js
const db = require('../config/db');

// Controller methods
const paymentController = {
  // Get all payments
  getAllPayments: (req, res) => {
    db.query('SELECT * FROM payments', (error, results) => {
      if (error) {
        console.error('Error fetching payments:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  },
  // Get payment by ID
  getPaymentById: (req, res) => {
    const paymentId = req.params.id;
    db.query('SELECT * FROM payments WHERE id = ?', [paymentId], (error, results) => {
      if (error) {
        console.error('Error fetching payment:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'Payment not found' });
      } else {
        res.json(results[0]);
      }
    });
  },
  // Create a new payment
  createPayment: (req, res) => {
    const newPayment = req.body;
    db.query('INSERT INTO payments SET ?', [newPayment], (error, results) => {
      if (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        newPayment.id = results.insertId;
        res.status(201).json(newPayment);
      }
    });
  },
  // Update payment by ID
  updatePaymentById: (req, res) => {
    const paymentId = req.params.id;
    const updatedPayment = req.body;
    db.query('UPDATE payments SET ? WHERE id = ?', [updatedPayment, paymentId], (error, results) => {
      if (error) {
        console.error('Error updating payment:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Payment not found' });
      } else {
        res.json(updatedPayment);
      }
    });
  },
  // Delete payment by ID
  deletePaymentById: (req, res) => {
    const paymentId = req.params.id;
    db.query('DELETE FROM payments WHERE id = ?', [paymentId], (error, results) => {
      if (error) {
        console.error('Error deleting payment:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Payment not found' });
      } else {
        res.json({ message: 'Payment deleted successfully' });
      }
    });
  }
};

module.exports = paymentController;
