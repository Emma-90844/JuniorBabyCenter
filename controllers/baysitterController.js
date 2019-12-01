class BabySitterController {
  dashboard(req, res) {
    res.render('babysitter/dashboard');
  }
}

module.exports = new BabySitterController();
