var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	 console.log('___ENTER apiRoutes.js___');
// Total list of friend entries
app.get('/api/friends', function(req, res) {
  console.log(friends);
  //res.json(friends);
});

app.post('/api/', function(req, res) {
  console.log();
  //res.json();
})