const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// This is the model of what the users should have
const employeeSchema = new Schema({
  userId: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  nextOfKin: String,
  nexOfKinPhoneNumber: String,
  gender: String,
  email: String,
  residenceAddress: String,
  dateOfAppointment: String,
  otherInformation: String,
  password: String,
  role: String
});

module.exports = mongoose.model('User', employeeSchema, 'users');
