
var friends = require ("../data/friends.js");

module.exports = function(app) {
    app.get('/api', function(req,res) {
            res.json(friends);
         });

         app.post("/api/friends", function(req,res) {
            console.log(req.body.scores)
            
            let user = req.body;

            for (var i = 0; i <user.scores.length; i++) {
                user.scores[i] =  parseInt(user.scores[i])
            }

        let bestFriendIndex = 0;
        let minDifference = 40; 

        for(var i=0; i < friends.length; i++) {
            
            var totalDifference = 0;
            for (var j= 0; j <friends[i].scores.length; j++ )
            let totalDifference = Math.abs(users.scores[j] - friends[i].scores[j])
        }


         })




}








// var path = require('path');


// module.exports = function(app) {
//     app.get('/Survey', function(req, res) {
//         res.sendFile(path.join(__dirname, "/../public/survey.html"))
//     });
// };

// app.use(function(req,res) {
//     res.sendFile(path.join(__dirname, "/../public/home.html"))

// }); 