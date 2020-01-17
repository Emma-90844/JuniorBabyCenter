const express = require('express');
const router = express.Router();

const supervisorController = require('../controllers/supervisorController');
const accountController = require('../controllers/accountController');

// Display the supervisor dashboard
router.get('/dashboard', accountController.verifySupervisorRole, (req, res) =>
  supervisorController.displayDashboard(req, res)
);
// Display the assign sitter form
router.get(
  '/create-assignment/:id',
  accountController.verifySupervisorRole,
  (req, res) => supervisorController.displayAssignSitterPage(req, res)
);

// Create a new assignment
router.post(
  '/create-assignment/:id',
  accountController.verifySupervisorRole,
  (req, res) => supervisorController.createSitterAssignment(req, res)
);

// View all assignments
router.get('/assignments', accountController.verifySupervisorRole, (req, res) =>
  supervisorController.viewAllAssignments(req, res)
);

// Display appointment form
router.get(
  '/create-appointment',
  accountController.verifySupervisorRole,
  (req, res) => supervisorController.displayCreateAppointmentForm(req, res)
);

// Create a new appointment
router.post(
  '/create-appointment',
  accountController.verifySupervisorRole,
  (req, res) => supervisorController.createAppointment(req, res)
);

// View all appointments
router.get(
  '/appointments',
  accountController.verifySupervisorRole,
  (req, res) => supervisorController.DisplayAppointmentsPage(req, res)
);

// Display payment form
router.get(
  '/create-payment/:id',
  accountController.verifySupervisorRole,
  (req, res) => supervisorController.displayCreatePaymentForm(req, res)
);

// Post payment to the database
router.post(
  '/create-payment/:id',
  accountController.verifySupervisorRole,
  (req, res) => supervisorController.createPayment(req, res)
);

// View all Payments
router.get('/payments', accountController.verifySupervisorRole, (req, res) =>
  supervisorController.viewAllPayments(req, res)
);

// Display all users
router.get('/users', accountController.verifySupervisorRole, (req, res) =>
  supervisorController.displayUsersPage(req, res)
);

module.exports = router;
