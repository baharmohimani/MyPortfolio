/*var express = require('express');
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
*/

/*var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.use("/css", express.static(__dirname + '/css'));

//array of users currently in chat
var people = {};

io.on('connection', function(socket){
    console.log('user connected!');

    socket.on('join', function(name){
        people[socket.id] = name; //create entry in 'people' with new user
        socket.emit("update", "You have connected to the server.");
        io.sockets.emit("update", name + " has joined the server.");
        io.sockets.emit("update_people_list", people);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected!');
        if(people[socket.id] != ""){
            io.sockets.emit("update", people[socket.id] + " has left the server.");
            delete people[socket.id];
            io.sockets.emit("update_people_list", people);
        }
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.sockets.emit('chat message', people[socket.id], msg);
    });


     http.listen(process.env.PORT || 3000, function(){
     console.log('listening on', http.address().port);
    });
});
*/

var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');

// Create the server instance
var app = express();

// Print logs to the console and compress pages we send
app.use(express.logger());
app.use(express.compress());

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
app.use(express.static(__dirname + '/static'));

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});
