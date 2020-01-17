const accountRepository = require('../repositories/accountRepository');

class ParentsController {
  dashboard(req, res) {
    accountRepository
      .findUserByEmail(req.session.email)
      .then(user => {
        res.render('parent/dashboard', { user });
      })
      .catch(error => {
        res.render('shared/error', {
          errorMessage: error.message
        });
      });
  }
}

module.exports = new ParentsController();
