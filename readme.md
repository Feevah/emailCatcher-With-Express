#### Lesson 2: Hello Express!
1) Serving up websites and JSON data is easy with Express. In this lesson, you’ll learn how to create your first web server with Express. Once the server is up and running, users will be able to interact with your application via the browser.

- Express 101
* To get started, add Express to your project.
npm i express@4.16.4
* Next, you can require express. You get access to a single function you can call to create a new Express application.
* Now, app can be used to set up the server. Let’s start by showing a message when someone visits the home page at localhost:3000 and the weather page at localhost:3000/weather.

- const express = require('express')
- const app = express()
- app.get('', (req, res) => {
- res.send('Hello express!')
})
- app.get('/CBC6', (req, res) => {
res.send('Cool')
})


2) The code above uses app.get to set up a handler for an HTTP GET request. The first argument is the path to set up the handler for. The second argument is the function to run when that path is visited. Calling res.send in the route handler allows you to send back a message as the response. This will get shown in the browser.

3) The last thing to do is start the server. This is done by calling app.listen with the port you want to listen on.
This can be done using app.listen as shown below.

- app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
* If you run the app, you’ll see the message printing letting you know that the server is running. This process will stay running until you shut it down. You can always use ctrl + c to terminate the process. Visit localhost:3000 or localhost:8080/snow/dog to view the messages!

#### Lesson 4: Serving up Static Assets
1) Express can serve up all the assets needed for your website. This includes HTML, CSS, JavaScript, images, and more. In this lesson, you’ll learn how to serve up an entire directory with Express.
Serving up a Static Directory
2) A modern website is more than just an HTML file. It’s styles, scripts, images, and fonts. Everything needs to be exposed via the web server so the browser can load it in. With Express, it’s easy to serve up an entire directory without needing to manually serve up each asset. All Express needs is the path to the directory it should serve.
3) The example below uses Nodes’ path module to generate the absolute path. The call to allows you to manipulate a path by providing individual path segments. It starts with which is the directory path for the current script. From there, the second segment moves out of the src folder and into the public directory. The path is then provided to express.static as shown below.


* const path = require('path')
* const express = require('express')
* const app = express()
* const publicDirectoryPath = path.join(__dirname, '../public')

* app.use(express.static(publicDirectoryPath))
* app.get('/CBC6', (req, res) => {
    res.send({
        Project: 'Almost Done',
        Location: 'Augusta'
    })
})
* app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
* Start the server, and the browser will be able to access all assets in the public directory.


* All files in public are exposed via the Express server. This is where your site assets need to live. If they’re not in public, then they’re not public and the browser won’t be able to load them correctly.

#### HOW TO USE THE EMAIL CATCHER:

1) Download all the files from the GitHub repository: [link]
- For ease of access, place your downloaded file on your Desktop
2) Execute the server:
- From Powershell (Windows), navigate to your server:
("cd .\Desktop\Catcher_In_The_Wifi-express\src")
- Execute the server code:
("node server")
3) Enter information on the HTML webpage:
- In your browser, enter "[website link]"
- For all the guests of the event, they should be able to enter their information on this screen
4) Checking information from event:
- Navigate to the secret website path in your browser "[website link]/snow/dog"
- In your command line (Powershell), the information in the database should be visible in RowDataPackets that represent individual guests

