const accountRepository = require('../repositories/accountRepository');
const supervisorRepository = require('../repositories/supervisorRepository');

class SupervisorController {
  displayDashboard(req, res) {
    accountRepository
      .findUserByEmail(req.session.email)
      .then(user => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          user
        });
      })
      .catch(error => {
        res.render('shared/error', {
          errorMessage: error.message
        });
      });
  }

  displayAssignSitterPage(req, res) {
    // Fetch an appointment with specified id
    supervisorRepository
      .findAppointmentById(req.params.id)
      .then(appointment => {
        res.render('supervisor/create-assignment', {
          layout: 'supervisorDashboard',
          appointment
        });
      })
      .catch(error => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          errorMessage: error.message
        });
      });
  }

  // POST
  createSitterAssignment(req, res) {
    supervisorRepository
      .createAssignment(req.body, req.params.id)
      .then(assignment => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          assignment
        });
      })
      .catch(error => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          errorMessage: error.message
        });
      });
  }

  // View all the assignments
  DisplayAppointmentsPage(req, res) {
    supervisorRepository
      .findAllAppointments()
      .then(appointments => {
        console.log(appointments);
        res.render('supervisor/appointments', {
          layout: 'supervisorDashboard',
          appointments
        });
      })
      .catch(error => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          errorMessage: error.message
        });
      });
  }

  // Display appointment form
  displayCreateAppointmentForm(req, res) {
    res.render('supervisor/create-appointment', {
      layout: 'supervisorDashboard'
    });
  }

  // POST to the database
  createAppointment(req, res) {
    supervisorRepository
      .createAppointment(req.body)
      .then(appointment => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          appointment
        });
      })
      .catch(error => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          errorMessage: error.message
        });
      });
  }

  // View all assignments
  viewAllAssignments(req, res) {
    supervisorRepository
      .findAllAssignments()
      .then(assignments => {
        res.render('supervisor/assignments', {
          layout: 'supervisorDashboard',
          assignments
        });
      })
      .catch(error => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          errorMessage: error.message
        });
      });
  }

  // Create payments
  displayCreatePaymentForm(req, res) {
    // Fetch an appointment with specified id
    supervisorRepository
      .findAppointmentById(req.params.id)
      .then(appointment => {
        res.render('supervisor/create-payment', {
          layout: 'supervisorDashboard',
          appointment
        });
      })
      .catch(error => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          errorMessage: error.message
        });
      });
  }

  // Post payment
  createPayment(req, res) {
    supervisorRepository
      .createPayment(req.body, req.params.id)
      .then(payment => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          payment
        });
      })
      .catch(error => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          errorMessage: error.message
        });
      });
  }

  // View all appointments
  viewAllPayments(req, res) {
    supervisorRepository
      .findAllPayments()
      .then(payments => {
        // Calculate total amount
        let totalAmount = 0;
        payments.forEach(payment => {
          totalAmount += payment.totalAmount;
        });

        res.render('supervisor/payments', {
          layout: 'supervisorDashboard',
          payments,
          totalAmount
        });
      })
      .catch(error => {
        res.render('supervisor/dashboardHome', {
          layout: 'supervisorDashboard',
          errorMessage: error.message
        });
      });
  }

  // View all users of the application
  displayUsersPage(req, res) {
    // Fetch all users from the DB
    accountRepository
      .findAllUsers()
      .then(users => {
        res.render('supervisor/users', {
          layout: 'supervisorDashboard',
          users
        });
      })
      .catch(error => {
        res.render('shared/error', {
          errorMessage: error.message
        });
      });
  }
}

module.exports = new SupervisorController();
