var express = require("express");
var router = express.Router();
var burger= require("../models/burger");

router.get('/', function(req, res, next){
    //calling burger which calls orm which places the data in the index handlebars
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index', {burger_data});
    })
})

router.put('/burgers/update', function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    })
})

router.post('/burgers/create', function(req, res){
    console.log("we hit it", req.body);
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})

router.delete("/burgers/delete", function(req, res) {
  
    burger.delete(req.body.burger_name, function(result){
        res.redirect('/');

    })
  });

module.exports = router;