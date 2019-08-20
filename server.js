var express = require("express");
var path = require("path");

// Link in html and api routes
var apiRoutes = require('../app/routing/api-routes.js');
var htmlRoutes = require('../app/routing/html-routes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Server routing map
apiRoutes(app);
htmlRoutes(app);


// Listener - Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });