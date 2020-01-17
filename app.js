const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');

const app = express();

const connectionString =
  'mongodb+srv://OnencanEmmy:Emma-90844@juniorbabycentercluster-9ubc9.mongodb.net/juniorbabycenter?retryWrites=true&w=majority';

// Connect to the database
mongoose.connect(
  connectionString,
  // This is for backward compartibility
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  error => {
    if (error) {
      console.log(error);
    } else {
      console.log('Connected to MongoDb');
    }
  }
);

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

// Configuring our templating engine
app.engine(
  'hbs',
  handlebars({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: `${__dirname}/views/layouts/`,
    partialsDir: `${__dirname}/views/partials`
  })
);

// Set up the session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1 * 60 * 60 * 1000 }
  })
);

// Set up flash messages
app.use(flash());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', require('./routes/homeRoute'));
app.use('/account', require('./routes/accountRoute'));
app.use('/admin', require('./routes/adminRoute'));
app.use('/babysitter', require('./routes/babysitterRoute'));
app.use('/supervisor', require('./routes/supervisorRoute'));
app.use('/parent', require('./routes/parentRoute'));

const port = 5000;
app.listen(port, () => {
  console.log(`Baby Center App is running @ http://localhost:${port}`);
});
