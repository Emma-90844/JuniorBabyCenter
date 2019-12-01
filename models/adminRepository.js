const User = require('./user');

class AdminRepository {
  // Create a new user in the DB
  async createUser(user) {
    const newUser = new User(user);
    return await newUser.save();
  }

  // Query a user with a specified email
  async findUserByEmail(email) {
    return await User.findOne({ email });
  }
}

module.exports = new AdminRepository();
