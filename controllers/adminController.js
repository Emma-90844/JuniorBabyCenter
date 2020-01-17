const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const adminRepository = require('../repositories/adminRepository');
const accountRepository = require('../repositories/accountRepository');

class AdminController {
  // Display dashboard
  dashboard(req, res) {
    accountRepository
      .findUserByEmail(req.session.email)
      .then(user => {
        res.render('admin/dashboardHome', { layout: 'adminDashboard', user });
      })
      .catch(error => {
        res.render('shared/error', {
          errorMessage: error.message
        });
      });
  }

  displaycreateEmployeePage(req, res) {
    res.render('admin/create-employee', { layout: 'adminDashboard' });
  }

  // Register a new user
  async createEmployee(req, res) {
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
        .then(createdEmployee => {
          res.render('admin/dashboardHome', {
            layout: 'adminDashboard',
            createdEmployee,
            password
          });
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

  // View all users of the application
  displayUsersPage(req, res) {
    // Fetch all users from the DB
    accountRepository
      .findAllUsers()
      .then(users => {
        res.render('admin/users', { layout: 'adminDashboard', users });
      })
      .catch(error => {
        res.render('shared/error', {
          errorMessage: error.message
        });
      });
  }

  // View existing appointments
  viewAllAppointments(req, res) {
    adminRepository
    .findAllAppointments()
    .then(appointments => {
      console.log(appointments);
      res.render('admin/appointments', {
        layout: 'adminDashboard',
        appointments
      });
    })
    .catch(error => {
      res.render('admin/dashboardHome', {
        layout: 'adminDashboard',
        errorMessage: error.message
      });
    });
  }

  // View all the payments
  viewAllPayments(req, res) {
    adminRepository
    .findAllPayments()
    .then(payments => {
      // Calculate total amount
      let totalAmount = 0;
      payments.forEach(payment => {
        totalAmount += payment.totalAmount;
      });

      res.render('admin/payments', {
        layout: 'adminDashboard',
        payments,
        totalAmount
      });
    })
    .catch(error => {
      res.render('admin/dashboardHome', {
        layout: 'adminDashboard',
        errorMessage: error.message
      });
    });
  }

  // View all the assignments
  viewAllAssignments(req, res){
    adminRepository
    .findAllAssignments()
    .then(assignments => {
      res.render('admin/assignments', {
        layout: 'adminDashboard',
        assignments
      });
    })
    .catch(error => {
      res.render('admin/dashboardHome', {
        layout: 'adminDashboard',
        errorMessage: error.message
      });
    });
  }
}

module.exports = new AdminController();
