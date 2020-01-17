const User = require('../models/user');

class ParentRepository {
  // Query the details of a parent
  async findUserByEmail(email) {
    return await User.findOne({ email });
  }
}

module.exports = new ParentRepository();
