var express = require("express");
var bodyParser = require("body-parser");
var mysql = require ("mysql");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
var Port = 3000;

var router = require('./controllers/router');
app.use('/', router);

app.listen(Port);
console.log("connected on port" + Port);