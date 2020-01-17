const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const accountController = require('../controllers/accountController');

// Display the admin dashboard
router.get('/dashboard', accountController.verifyAdminRole, (req, res) =>
  adminController.dashboard(req, res)
);

// Display create user form
router.get('/create-employee', accountController.verifyAdminRole, (req, res) =>
  adminController.displaycreateEmployeePage(req, res)
);

// Create a new user
router.post('/create-employee', accountController.verifyAdminRole, (req, res) =>
  adminController.createEmployee(req, res)
);

// View all the appointments
router.get('/appointments', accountController.verifyAdminRole, (req, res) =>
  adminController.viewAllAppointments(req, res)
);

// View all payments
router.get('/payments', accountController.verifyAdminRole, (req, res) =>
  adminController.viewAllPayments(req, res)
);

// View all assignments
router.get('/assignments', accountController.verifyAdminRole, (req, res) => 
  adminController.viewAllAssignments(req, res)
);

// Display all users
router.get('/users', accountController.verifyAdminRole, (req, res) =>
  adminController.displayUsersPage(req, res)
);

module.exports = router;
