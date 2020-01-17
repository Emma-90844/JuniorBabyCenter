const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// This is the model of what the users should have
const paymentSchema = new Schema({
  totalHours: Number,
  totalAmount: Number,
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }
});

module.exports = mongoose.model('Payment', paymentSchema, 'payments');
