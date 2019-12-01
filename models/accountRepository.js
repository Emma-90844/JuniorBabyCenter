const User = require('./user');

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
}

module.exports = new AccountRepository();
