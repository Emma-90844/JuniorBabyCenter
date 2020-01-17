const express = require('express');
const router = express.Router();

const babysitterController = require('../controllers/baysitterController');
const accountController = require('../controllers/accountController');

// Display the baby sitter dashboard
router.get('/dashboard', accountController.verifyBabySitterRole, (req, res) =>
  babysitterController.dashboard(req, res)
);

router.get('/assignments', accountController.verifyBabySitterRole, (req, res) =>
  babysitterController.viewAllAssignments(req, res)
);

module.exports = router;
