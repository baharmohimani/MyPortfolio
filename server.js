var http = require('http').Server(app);

var express = require('express');
var path = require('path');
var handlebars = require('express3-handlebars');
var app = express();

var home = require('./routes/home');
var Employment = require('./routes/Employment');
var skills = require('./routes/skills');
var projects = require('./routes/projects');
var Honors_Awards = require('./routes/Honors_Awards');
var Related_Courses = require('./routes/Related_Courses');
// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
// var connect = require("connect");

//var app = express().use(express.static(__dirname + '/public'));
//var app = express.createServer().use(express.static(__dirname + '/public'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', home.view);
app.get("/Employment.html", Employment.view);
app.get("/Honors_Awards.html", Honors_Awards.view);
app.get("/skills.html", skills.view);
app.get("/Related_Courses.html", Related_Courses.view);
app.get("/projects.html", projects.view);


// var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
// var express = require('express');

// Create the server instance
// var app = express();

// Print logs to the console and compress pages we send
// app.use(express.logger());
// app.use(express.compress());

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
// app.use(express.static(__dirname + '/public'));

// Start the server
// var port = process.env.PORT || PORT; // 80 for web, 3000 for development
// app.listen(port, function() {
  // console.log("Node.js server running on port %s", port);
// });

  // app.get('/Employment', function (req, res) {
  // console.log("hit index route");
  // res.render('Employment');
  // res.send('Employement');
  // });

  // app.get('/Honors_Awards', function (req, res) {
  // console.log("hit index route");
  // res.render('Honors_Awards');
  // res.send('Honors_Awards');
  // });

  // app.get('/projects', function (req, res) {
  // console.log("hit index route");
  // res.render('projects');
  // res.send('projects');
  // });

  // app.get('/skills', function (req, res) {
  // console.log("hit index route");
  // res.render('skills');
  // res.send('skills');
  // });

  // app.get('/Related_Courses', function (req, res) {
  // console.log("hit index route");
  // res.render('Related_Courses');
  // res.send('Related_Courses');
  // });



app.listen(process.env.PORT || 3002, function(){
  console.log('listening on', process.env.PORT || 3002);
});

