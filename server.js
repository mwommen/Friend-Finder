var express = require('express');
var path = require('path');

var app = express();


//LOOK THIS OVER 
var PORT = process.env.PORT || 8080; 
app.use(express.json());
//app.use(express.urlencoded({}));
app.use(express.static(path.join(__dirname, "App", "Public", "static")))

//API and HTML Routes 
require("./App/Routing/apiRoutes.js")(app);
require ("./App/Routing/htmlRoutes.js")(app);



  


app.listen(PORT, function() {
    console.log("App listening on port: " + PORT)
});


