var orm = require("../config/orm.js");

//contain whats needed to modify the orm to use in db
var burger = {
    all: function(cb){
        //calling orm inserting burgers as table insert and sending response to routes file
        orm.all('burgers', function(res){
            cb(res);
        })
    },

    // update:('burgers', function(res){
        // orm.update('burgers', id, cb)
        // cb(res);

        update: function(id, cb){
            orm.update('burgers', id, cb);
        },
        
        create: function(name, cb){
            orm.create('burgers', name, cb);
        }
    }

module.exports = burger;