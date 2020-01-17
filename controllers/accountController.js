const bcrypt = require('bcryptjs');
const accountRepository = require('../repositories/accountRepository');
const uuid = require('uuid');

class AccountController {
  displayLoginPage(req, res) {
    res.render('account/login');
  }

  displayRegistrationPage(req, res) {
    res.render('account/register');
  }

  // Login a registered user
  async login(req, res) {
    console.log(req.body);
    const user = await accountRepository.findUserByEmail(req.body.email);
    // Check if the user with the email exist
    if (user != null) {
      // Compare the password
      if (await bcrypt.compare(req.body.password, user.password)) {
        req.session.email = user.email;
        req.session._id = user._id;
        // Check the role
        if (user.role == 'admin') {
          // Redirectto the admin page
          req.session.role = 'admin';
          res.render('admin/dashboardHome', { layout: 'adminDashboard', user });
        } else if (user.role == 'babysitter') {
          // Redirect to the bay sitter page
          req.session.role = 'babysitter';
          res.render('babysitter/dashboardHome', {
            layout: 'babysitterDashboard',
            user
          });
        } else if (user.role == 'parent') {
          // Redirect to the bay sitter page
          req.session.role = 'parent';
          res.render('parent/dashboard', { user });
        } else {
          // Redirect to the supervisor page
          req.session.role = 'supervisor';
          res.render('supervisor/dashboardHome', {
            layout: 'supervisorDashboard',
            user
          });
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

  // Register a new user (parent)
  async register(req, res, next) {
    const password = req.body.password;
    const newUser = req.body;
    // Check if the user with the email exist
    if ((await accountRepository.findUserByEmail(newUser.email)) == null) {
      // Encrypt user password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(newUser.password, salt);
      newUser.password = hashPassword;

      // Add a unique user ID
      newUser.userId = uuid.v4();

      // Add parent role by default
      newUser.role = 'parent';

      // Save the user to the datbase
      accountRepository
        .register(newUser)
        .then(user => {
          res.render('parent/dashboard', { user });
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

  // Log out a current user
  logout(req, res) {
    req.session.role = null;
    res.redirect('/');
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

  verifyParentRole(req, res, next) {
    if (req.session.role == 'parent') {
      next();
    } else {
      req.flash('errorMessage', 'Please login as a parent');
      res.redirect('/account/login');
    }
  }
}

module.exports = new AccountController();
