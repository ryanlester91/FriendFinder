var express = require("express");
var bodyParser = require("body-parser");
//var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// Link in html and api routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Listener - Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });