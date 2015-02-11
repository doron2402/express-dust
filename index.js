var express = require('express');

var app = module.exports = express();

var controllers = require('./controllers');
var mw = require('./mw');

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.all('/',function(req, res, next){
  console.log(req);
  console.log('processing......');
  return next();
});
//Home
app.get('/', controllers.site.getHome);

app.post('/contact', controllers.site.postContact);

//User Login
app.get('/login', mw.site.checkForCSRF, controllers.users.getLogin);
app.post('/login', mw.site.checkForCSRF, controllers.users.postLogin);
//Signup
app.get('/signup', mw.site.checkForCSRF, controllers.users.postLogin);
app.post('/signup', mw.site.checkForCSRF, controllers.users.postLogin);
// forgot user or password
app.get('/forgot/:type', mw.site.checkForCSRF, controllers.users.postLogin); //type pass or username
app.post('/forgot', mw.site.checkForCSRF, controllers.users.postLogin);
//dashboard
app.get('/dashboard', controllers.users.getLogin);
app.get('/dashboard/profile', controllers.users.getLogin);
app.get('/dashboard/data', controllers.users.getLogin);

app.use(function(err, req, res, next){
  // treat as 404
  if (~err.message.indexOf('not found')) return next();

  // log it
  console.error(err.stack);

  // error page
  res.status(500).render('5xx');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
  res.status(404).render('404', { url: req.originalUrl });
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express app started on port 3000');
}
