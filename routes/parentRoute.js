const express = require('express');
const router = express.Router();

const parentsController = require('../controllers/parentsController');
const accountController = require('../controllers/accountController');

// Display the baby sitter dashboard
router.get('/dashboard', accountController.verifyParentRole, (req, res) =>
  parentsController.dashboard(req, res)
);

module.exports = router;
