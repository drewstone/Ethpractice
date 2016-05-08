// Packages
var express = require('express');
var Promise = require('bluebird');
var app = express();

// External files
var routes = require('./api/routes.js');

// Express routers
app.use('/', routes);

app.listen(3000, function() {
	console.log('Listening on port 3000');
});

