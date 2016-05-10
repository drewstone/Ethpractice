// Packages
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './app/views')));
app.set('view engine', 'ejs');

// External files
var routes = require('./api/routes.js');

// Express routers
app.use('/', routes);

app.listen(3000, function() {
	console.log('Listening on port 3000');
});

