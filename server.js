var http = require('http').Server(app);

var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));


 app.get('/home', function (req, res) {
  console.log("hit index route");
  res.render('home');
  res.send('home');
  });

  app.get('/Employment', function (req, res) {
  console.log("hit index route");
  res.render('Employment');
  res.send('Employement');
  });

  app.get('/Honors_Awards', function (req, res) {
  console.log("hit index route");
  res.render('Honors_Awards');
  res.send('Honors_Awards');
  });

  app.get('/projects', function (req, res) {
  console.log("hit index route");
  res.render('projects');
  res.send('projects');
  });

  app.get('/skills', function (req, res) {
  console.log("hit index route");
  res.render('skills');
  res.send('skills');
  });

  app.get('/Related_Courses', function (req, res) {
  console.log("hit index route");
  res.render('Related_Courses');
  res.send('Related_Courses');
  });



app.listen(process.env.PORT || 3000, function(){
  console.log('listening on', process.env.PORT || 3000);
});

