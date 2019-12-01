const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// This is the model of what the users should have
const userSchema = new Schema({
  userId: String,
  email: String,
  password: String,
  role: String
});

module.exports = mongoose.model('User', userSchema, 'users');
