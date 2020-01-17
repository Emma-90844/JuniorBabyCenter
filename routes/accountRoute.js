const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

// Display the login page
router.get('/login', (req, res) =>
  accountController.displayLoginPage(req, res)
);

// Login a user
router.post('/login', (req, res) => accountController.login(req, res));

// Display the register page
router.get('/register', (req, res) =>
  accountController.displayRegistrationPage(req, res)
);

// Register a new parent
router.post('/register', (req, res) => accountController.register(req, res));

router.get('/logout', (req, res) => accountController.logout(req, res));

module.exports = router;
