const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// This is the model of what the users should have
const babySchema = new Schema({
  babyId: String,
  firstName: String,
  lastName: String,
  age: String,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Baby', babySchema, 'babies');
