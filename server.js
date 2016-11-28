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
var RedCross = require('./routes/RedCross');
var Reflectionship = require('./routes/Reflectionship');
var TasteBuddy = require('./routes/TasteBuddy');

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
app.get("/RedCross.html", RedCross.view);
app.get("/Reflectionship.html", Reflectionship.view);
app.get("/TasteBuddy.html", TasteBuddy.view);

app.listen(process.env.PORT || 3002, function(){
  console.log('listening on', process.env.PORT || 3002);
});

