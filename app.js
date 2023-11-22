const express = require('express');
const authRouter = require('./routes/auth');
const accountRouter = require('./routes/account');
const pointsRouter = require('./routes/points');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(
  session(
    { 
      secret: process.env.SESSION_SECRET, 
      resave: false, 
      saveUninitialized: false 
    }));

app.get('/', function(req, res){
  res.redirect('/auth');
});

// set Routes
app.use('/auth', authRouter);
app.use('/account', accountRouter);
app.use('/points', pointsRouter);


module.exports = app;