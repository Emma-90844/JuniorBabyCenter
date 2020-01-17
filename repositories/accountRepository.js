const User = require('../models/user');

class AccountRepository {
  // Create a new user in the DB
  async register(user) {
    const newUser = new User(user);
    return await newUser.save();
  }

  // Query a user with a specified email
  async findUserByEmail(email) {
    return await User.findOne({ email });
  }

  // Fetch all the users
  async findAllUsers() {
    return await User.find();
  }

  // Find an appointment with a specific ID
  async findAppointmentById(_id) {
    return await Appointment.findById(_id);
  }
}

module.exports = new AccountRepository();
