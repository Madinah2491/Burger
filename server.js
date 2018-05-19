var express = require("express");
var bodyParser = require("body-parser");
var mysql = require ("mysql");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();
var router = ("./controllers");

var Port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require("./controllers/burgers_controller.js")

app.use(routes);
// ('/', router);

app.listen(Port);
console.log("connected on port" + Port);