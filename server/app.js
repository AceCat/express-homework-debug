var express = require('express');
var app = express();
var server  = require('http').createServer(app);
var path = require('path');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey the server finally works')
  })

app.get('/json-kurt', function(req, res) {
	var json = {"name": "kurt russell", "beard": "true", "awesome": "true"}
	res.json(json);
})

app.get('/json-patrick', function(req, res) {
	var json = {"name": "patrick swayze", "beard": "false", "awesome": "true"}
	res.json(json);
})

app.get('/handlebars-sample', function(req, res) {
	res.render('handlebars-sample')
})

app.get('/movies', function(req, res) {
	res.render('movies')
})

// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening on port 5000');
})
