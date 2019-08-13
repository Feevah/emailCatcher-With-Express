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

    // After inserting data, I want to redirect to empty input box 
       res.redirect("/");
})


// We can console log data, but I want to render database at url /snow/dog

app.get('/snow/dog', (req, res) => {
            console.log(db.getCaughtData());    		
})



	// 404
app.get('*', (req, res) => {
    res.send("Sorry, the page you requested does not exist.")
})



app.listen(8080, () => {
	console.log("Listening On Port 8080")
}) 