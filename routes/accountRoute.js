const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

// Display the login page
router.get('/login', (req, res) =>
  accountController.displayLoginPage(req, res)
);

// Login a user
router.post('/login', (req, res) => accountController.login(req, res));

module.exports = router;
