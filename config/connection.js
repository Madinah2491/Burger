var mysql = require("mysql");
var connection ;

//basic connection to sql db
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'Maddough2018!',
//     database: 'burgers_db'
// })

    if (process.env.JAWSDB_URL){
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else{
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Maddough2018!',
            database: 'burgers_db'
        });
    };

connection.connect();

module.exports = connection;