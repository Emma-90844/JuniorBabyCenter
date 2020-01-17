const User = require('../models/user');
const Appointment = require('../models/appointment');
const Payment = require('../models/payment');
const Assignment = require('../models/assignment');

class AdminRepository {
  // Create a new user in the DB
  async createUser(employee) {
    const newUser = new User(employee);
    return await newUser.save();
  }

  // Query a user with a specified email
  async findUserByEmail(email) {
    return await User.findOne({ email });
  }

   // Find all the appointments in the DB
   async findAllAppointments() {
    return await Appointment.find();
  }

  async findAllAssignments() {
    return await Assignment.find()
      .populate('appointment')
      .populate('babysitter');
  }
  async findAllPayments() {
    return await Payment.find().populate('appointment');
  }
}

module.exports = new AdminRepository();
