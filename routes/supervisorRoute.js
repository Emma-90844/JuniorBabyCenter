const express = require('express');
const router = express.Router();

const supervisorController = require('../controllers/supervisorController');
const accountController = require('../controllers/accountController');

// Display the supervisor dashboard
router.get('/dashboard', accountController.verifySupervisorRole, (req, res) =>
  supervisorController.displayDashboard(req, res)
);
// Display the assign sitter form
router.get('/assignment', accountController.verifySupervisorRole, (req, res) =>
  supervisorController.displayAssignSitterPage(req, res)
);

// Create a new assignment
router.post('/assignment', accountController.verifySupervisorRole, (req, res) =>
  supervisorController.displayAssignSitterPage(req, res)
);

// Display appointment form
router.get('/appointment', accountController.verifySupervisorRole, (req, res) =>
  supervisorController.DisplayAppointmentPage(req, res)
);

// Create a new appointment
router.post(
  '/appointment',
  accountController.verifySupervisorRole,
  (req, res) => supervisorController.createAppointment(req, res)
);

module.exports = router;
