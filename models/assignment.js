const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// This is the model of what the users should have
const assignmentSchema = new Schema({
  isConfirmed: Boolean,
  babysitter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }
});

module.exports = mongoose.model('Assignment', assignmentSchema, 'assignments');
