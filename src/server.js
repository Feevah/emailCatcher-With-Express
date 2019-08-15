const path = require('path')
const express = require("express");
const db = require("./db.js");


const app = express();
const publicDirectory = path.join(__dirname, '../public')


app.use(express.static(publicDirectory))


app.get('/add', (req, res) => {
	var emailMe =  req.query.email;
    var event = req.query.event;

       db.insertCaughtData(emailMe)
})


// Render database at url /snow/dog


app.get('/snow/dog', (req, res) => {
  db.getCaughtData().then(result => {res.send(result)});    
})




	// 404
app.get('*', (req, res) => {
    res.send("Sorry, the page you requested does not exist.")
})



app.listen(8080, () => {
	console.log("Listening On Port 8080")
}) 