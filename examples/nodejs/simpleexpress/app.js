// Taken from http://expressjs.com/4x/api.html
var express = require('express');
var app = express();

/* General form:

app.HTTP_VERB('ROUTE', function(request, response) {
	// Do something
});
*/

app.get('/', function(request, response) {
	console.log(request);
	response.send("Hello world");
});

app.get('/pikachu', function(request, response) {
	response.send("You've won the game!");
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 8888);
