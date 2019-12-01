class SupervisorController {
  displayDashboard(req, res) {
    res.render('supervisor/dashboard');
  }

  displayAssignSitterPage(req, res) {
    res.render('supervisor/assignSitter');
  }

  createSitterAssignment(req, res) {
    // Post assignments collection
  }

  DisplayAppointmentPage(req, res) {
    res.render('createAppointment');
  }

  createAppointment(req, res) {
    // Post to the appointments collection
  }
}

module.exports = new SupervisorController();
