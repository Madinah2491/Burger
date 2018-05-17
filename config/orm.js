var connection = require('./connection');

//obj with methods of things to do with new data

var orm = {
    all: function(tableInput, cb){
//collects all data from selected table ...call back should place data in table to the next file
        connection.query('Select * from' +tableInput + ';', function(err, result){
            if (err) throw (err);
            cb(result);
        } )
    }
}
//create new data in db
//update existing data
