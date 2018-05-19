var mysql = require("mysql");

//basic connection to sql db
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Maddough2018!',
    database: 'burgers_db'
})

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as ID" + connection.threadId);
});

module.exports = connection;