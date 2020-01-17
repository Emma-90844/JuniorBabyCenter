const accountRepository = require('../repositories/accountRepository');
const babysitterRepository = require('../repositories/babysitterRepository');

class BabySitterController {
  dashboard(req, res) {
    accountRepository
      .findUserByEmail(req.session.email)
      .then(user => {
        res.render('babysitter/dashboardHome', {
          layout: 'babysitterDashboard',
          user
        });
      })
      .catch(error => {
        res.render('shared/error', {
          errorMessage: error.message
        });
      });
  }

  // See all the appointments assigned to
  viewAllAssignments(req, res) {
    babysitterRepository
      .findBabysitterAssignments(req.session._id)
      .then(assignments => {
        res.render('babysitter/assignments', {
          layout: 'babysitterDashboard',
          assignments
        });
      })
      .catch(error => {
        res.render('babysitter/dashboardHome', {
          layout: 'babysitterDashboard',
          errorMessage: error.message
        });
      });
  }
}

module.exports = new BabySitterController();
