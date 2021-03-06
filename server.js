// DEPENDENCIES
const express = require('express');
let app = express();
const ejs = require('ejs');
const marsMissions = require('./models/marsMissions.js');
const path = require('path');

// PORT
const port = 3000;

// INDEX Route
// the view displays just the names of each mission
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.get('/missions', function(request, response) {
	response.render('missions/index.ejs', {
		marsMissions: marsMissions
	});
});

// SHOW Route
// the view displays all the data for a single mission
app.get('/missions/:index', function(request, response) {
	response.render('missions/show.ejs', {
		marsMissions: marsMissions[request.params.index]
	});
});

// LISTENER
app.listen(port, function() {
	console.log('Missions to Mars running on port: ', port);
});

module.exports = app;
