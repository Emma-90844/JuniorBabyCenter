class HomeController {
  // This display the home page/landing page
  index(req, res) {
    res.render('home/index');
  }

  about(req, res) {
    res.render('home/about');
  }

  contact(req, res) {
    res.render('home/contact');
  }

  news(req, res) {
    res.render('home/news');
  }

  services(req, res) {
    res.render('home/services');
  }
}

module.exports = new HomeController();
