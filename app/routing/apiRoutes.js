var friendsArray = require('../data/friends.js');


// Export API routes
//console.log("API Routing ready");
function apiRoutes(app) {
// Total list of friend entries
app.get('/api/friends', function(req, res) {
  console.log(friendsArray);
  res.json(friendsArray);
});

app.post('/api/friends', function(req, res) {
  
  var newFriend = {
    name: req.body.name,
    photo: req.body.photo,
    scores: []
  };

  //pushing new scores into an array
  var scoresArray = [];
  for(var i = 0; i < req.body.scores.length; i++) {
    scoresArray.push(parseInt(req.body.scores[i]))
  }
  newFriend.scores = scoresArray;

  //Cross check our new friend entry with existing ones
  var scoreCompareArray = [];
  for(var i=0; i < friends.length; i++) {

    var scoreDiffer = 0;
    for(var j=0; j < newFriend.scores.length; j++) {
      scoreDiffer += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
    }

    scoreCompareArray.push(scoreDiffer);
  }

  var bestMatchPosition = 0;
  for(var i = 1; i < scoreCompareArray.length; i++) {

    if(scoreCompareArray[i] <= scoreCompareArray[bestMatchPosition]) {
      bestMatchPosition = i;
    }
  }

  var bestFriendMatch = friends[bestMatchPosition];

  res.json(bestFriendMatch);
  //alert("Your best match is " + bestFriendMatch + "!");

  friendsArray.push(newFriend);
});

//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
}

//Doing the module.exports in a function is apparently enough to do this exporting task
module.exports = apiRoutes;