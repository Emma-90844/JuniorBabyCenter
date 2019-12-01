const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const adminRepository = require('../models/adminRepository');

class AdminController {
  // Display dashboard
  dashboard(req, res) {
    res.render('admin/dashboard');
  }

  // Display appointment page
  displayAppointmentsPage(req, res) {
    res.render('admin/appointment');
  }

  displaycreateUserPage(req, res) {
    res.render('admin/createUser');
  }

  // Register a new user
  async createUser(req, res) {
    const password = req.body.password;
    const userToRegister = req.body;
    // Check if the user with the email exist
    if ((await adminRepository.findUserByEmail(userToRegister.email)) == null) {
      // Encrypt user password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(userToRegister.password, salt);
      userToRegister.password = hashPassword;

      // Add a unique user ID
      userToRegister.userId = uuid.v4();

      // Save the user to the datbase
      adminRepository
        .createUser(userToRegister)
        .then(createdUser => {
          res.render('admin/dashboard', { createdUser, password });
        })
        .catch(error => {
          console.error(error);
          res.render('shared/error', { errorMessage: error.message });
        });

      // The user with specified email already exist in the DB
    } else {
      res.render('shared/error', {
        errorMessage: `The user with email ${req.body.email} is already taken, use another one!!`
      });
    }
  }

  displayUsersPage(req, res) {
    res.render('admin/users');
  }
}

module.exports = new AdminController();
