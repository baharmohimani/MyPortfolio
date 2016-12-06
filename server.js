var http = require('http').Server(app);

var express = require('express');
var path = require('path');
var handlebars = require('express3-handlebars');
var app = express();

var Home = require('./routes/home');
var Projects = require('./routes/projects');
var Resume = require('./routes/resume');
var Contact = require('./routes/contact');
var Fetch = require('./routes/Fetch');
var Reflectionship = require('./routes/Reflectionship');
var TasteBuddy = require('./routes/TasteBuddy');

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', Home.view);
app.get("/Projects.html", Projects.view);
app.get("/resume.html", Resume.view);
app.get("/Contact.html", Contact.view);
app.get("/Fetch.html", Fetch.view);
app.get("/Reflectionship.html", Reflectionship.view);
app.get("/TasteBuddy.html", TasteBuddy.view);

app.listen(process.env.PORT || 3002, function(){
  console.log('listening on', process.env.PORT || 3002);
});

