
var mysql = require('mysql'),
    // config  = require("./config.json"),
    email = "";
    


function getCaughtData(){
    var connection = mysql.createConnection({
    	  host     : 'localhost',
		  user     : 'root',
		  password : 'password',
		  database : 'catcher_in_the_wifi'
    });
    connection.connect(function(err) {
        if(err) throw err;
        connection.query("SELECT * FROM caughtInfo", function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            connection.end(); // close the connection
        })
    }) 
}

function insertCaughtData(email) {
    var connection = mysql.createConnection({
      host     : 'localhost',
	  user     : 'root',
	  password : 'password',
	  database : 'catcher_in_the_wifi'
});
    connection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO caughtInfo (email) VALUES ('" + email +"')";
        connection.query(sql, function(err, result) {
         if (err) throw err;
         console.log("Email entered");
         connection.end(); // close the connection
     })
    })
}
// getCaughtData(); //  test call
// insertCaughtData(email); //test call

module.exports.getCaughtData = getCaughtData;
module.exports.insertCaughtData = insertCaughtData;