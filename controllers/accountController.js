const bcrypt = require('bcryptjs');
const accountRepository = require('../models/accountRepository');
const uuid = require('uuid');

class AccountController {
  displayLoginPage(req, res) {
    res.render('account/login');
  }

  displayRegisterPage(req, res) {
    res.render('account/register');
  }

  // Login a registered user
  async login(req, res) {
    const user = await accountRepository.findUserByEmail(req.body.email);
    // Check if the user with the email exist
    if (user != null) {
      // Compare the password
      if (await bcrypt.compare(req.body.password, user.password)) {
        // Check the role
        if (user.role == 'admin') {
          // Redirectto the admin page
          req.session.role = 'admin';
          res.render('admin/dashboard', { user });
        } else if (user.role == 'babysitter') {
          // Redirect to the bay sitter page
          req.session.role = 'babysitter';
          res.render('babysitter/dashboard', { user });
        } else {
          // Redirect to the supervisor page
          req.session.role = 'supervisor';
          res.render('supervisor/dashboard', { user });
        }

        // Th user provided incorrect password
      } else {
        res.render('shared/error', {
          errorMessage: `The password is incorrect!!`
        });
      }

      // The user with that email does not
    } else {
      res.render('shared/error', {
        errorMessage: `The email address ${req.body.email} is incorrect!!`
      });
    }
  }

  verifyBabySitterRole(req, res, next) {
    if (req.session.role == 'babysitter') {
      next();
    } else {
      req.flash('errorMessage', 'Please login as a baby sitter');
      res.redirect('/account/login');
    }
  }

  verifySupervisorRole(req, res, next) {
    if (req.session.role == 'supervisor') {
      next();
    } else {
      req.flash('errorMessage', 'Please login as a supervisor');
      res.redirect('/account/login');
    }
  }

  verifyAdminRole(req, res, next) {
    if (req.session.role == 'admin') {
      next();
    } else {
      req.flash('errorMessage', 'Please login as a Admin');
      res.redirect('/account/login');
    }
  }
}

module.exports = new AccountController();
