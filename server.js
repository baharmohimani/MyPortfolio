var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/', function (req, res) {
  res.sendfile('Bahar.html');
});

//http.listen(3000, function(){
 //console.log('listening on *:3000');
 //});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
