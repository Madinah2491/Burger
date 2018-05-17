var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Maddough2018!',
    database: 'burger_db'
})

connection.connect(function(err){
    if (err)throw (err);
    console.log("connected as ID" + connection.threadId);
});

module.exports = connection;