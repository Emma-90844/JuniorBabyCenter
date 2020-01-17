const User = require('../models/user');
const Assignment = require('../models/assignment');

class BabysitterRepository {
  async findBabysitterAssignments(id) {
    return await Assignment.find({ babysitter: id })
      .populate('babysitter')
      .populate('appointment');
  }
}

module.exports = new BabysitterRepository();
