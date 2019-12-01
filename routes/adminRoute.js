const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const accountController = require('../controllers/accountController');

// Display the admin dashboard
router.get('/dashboard', accountController.verifyAdminRole, (req, res) =>
  adminController.dashboard(req, res)
);
// Display Appointment page
router.get('/appointment', (req, res) =>
  adminController.displayAppointmentsPage(req, res)
);

// Display create user form
router.get('/createuser', accountController.verifyAdminRole, (req, res) =>
  adminController.displaycreateUserPage(req, res)
);

// Create a new user
router.post('/createuser', accountController.verifyAdminRole, (req, res) =>
  adminController.createUser(req, res)
);

// Display all users
router.post('/users', accountController.verifyAdminRole, (req, res) =>
  adminController.displayUsersPage(req, res)
);

module.exports = router;
