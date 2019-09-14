var express = require('express');
var bodyParser = require ('body-parser')
var path = require('path');

var app = express();


var PORT = process.env.PORT || 8080; 
app.use(express.json());
//app.use(express.urlencoded({}));
app.use(express.static(path.join(__dirname, "App", "Public", "static")))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//API and HTML Routes 
require("./App/Routing/apiRoutes.js")(app);
require ("./App/Routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on port: " + PORT)
});


