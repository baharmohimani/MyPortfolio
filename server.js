var http = require('http').Server(app);

var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/', function (req, res) {
    console.log("hit index route");
  res.sendfile('home.html');
});

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on', process.env.PORT || 3000);
});

