
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