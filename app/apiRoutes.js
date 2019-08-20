var express = require("express");
var path = require("path");

var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	 console.log('___ENTER apiRoutes.js___');
// Total list of friend entries
app.get('/api/friends', function(req, res) {
  console.log(friends);
  //res.json(friends);
});

app.post('/api/friends', function(req, res) {
  console.log();
  //res.json(scores);
})

//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
}

module.exports = apiRoutes;