const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Route to get all payments
router.get('/', paymentController.getAllPayments);

// Route to get a payment by ID
router.get('/:id', paymentController.getPaymentById);

// Route to create a new payment
router.post('/', paymentController.createPayment);

// Route to update a payment by ID
router.put('/:id', paymentController.updatePaymentById);

// Route to delete a payment by ID
router.delete('/:id', paymentController.deletePaymentById);

module.exports = router;
