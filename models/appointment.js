const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// This is the model of what the users should have
const appointmentSchema = new Schema({
  nameOfParent: String,
  namesOfChildren: String,
  phoneNumber: String,
  numberOfChildren: Number,
  email: String,
  childrenAges: String,
  residenceAddress: String,
  dateOfAppointment: String,
  club: String,
  otherInformation: String
});

module.exports = mongoose.model(
  'Appointment',
  appointmentSchema,
  'appointments'
);
