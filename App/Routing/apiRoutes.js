
var friends = require ("../data/friends.js");

module.exports = function(app) {
    app.get('/api', function(req,res) {
            res.json(friends);
         });

         app.post("/api/friends", function(req,res) {
            console.log(req.body.scores)
            
            let user = req.body.scores;

            for (var i = 0; i < user.length; i++) {
                user[i] =  parseInt(user[i])
            }

        let bestFriendIndex = 0;
        let minDifference = Infinity; 

        for(var i=0; i < friends.length; i++) {
            
            let totalDifference = 0;
            for (var j= 0; j < friends[i].scores.length; j++){
                totalDifference += Math.abs(user[j] - friends[i].scores[j])
            }
            if (totalDifference < minDifference) {
                bestFriendIndex = i;
                 minDifference = totalDifference;
            }
        }

        friends.push(user)
        ///DOwn ehre bestFirnedIndex should be the min
        // return json
        res.json(friends[bestFriendIndex]);




         })
}
