// TODO:1. Create barebone Web app server
// TODO:2. Set up client directory to serve static files
// TODO:3. Handle errors
// TODO:4. Post request


// TODO: 1.1 Load the Express module
// Loads express module and assigns it to a var called express
var express = require("express");

// TODO: 2.1 Load the path module
// Loads path to access helper functions for working with files and directory paths
var path = require("path");

//TODO: 4.1 Load the body parser module
// Loads bodyParser to populate and parse the body property of the request object
var bodyParser = require("body-parser");

// TODO: 1.2. Create an instance of the express module
// Creates an instance of express called app
var app = express();

// TODO: 1.3. Define the port that the server will listen to
// Defines server port.
// Value of NODE_PORT is taken from the user environment if defined; port 3000 is used otherwise.
const NODE_PORT = process.env.NODE_PORT || 3000;

// TODO: 2.2a Define CLIENT_FOLDER as a constant and assign the client folder's path to it.
// Defines paths
// __dirname is a global that holds the directory name of the current module
const CLIENT_FOLDER = path.join(__dirname + '/../client');  // CLIENT FOLDER is the public directory
//TODO: 2.2b  Assign path to the messages folder to the constant MSG_FOLDER
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');


// TODO: 2.3 Create a middleware that would serve static files from the CLIENT_FOLDER
// Serves files from public directory (in this case CLIENT_FOLDER).
// __dirname is the absolute path of the application directory.
// if you have not defined a handler for "/" before this line, server will look for index.html in CLIENT_FOLDER
app.use(express.static(CLIENT_FOLDER));

//TODO:4.2 Create a middleware that parses urlencoded bodies
// Populates req.body with information submitted through the registration form.
// Expected content type is application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//TODO:4.3 Post request to the page
// Defines endpoint exposed to client side for registration
app.post("/register", function (req, res, next) {
    console.log('\nData Submitted');
    console.log('Dept No: ' + req.body.deptNo);
    console.log('Dept Name: ' + req.body.deptname);
    res.status(200).sendFile(path.join(CLIENT_FOLDER + "/thanks.html"));
});


// TODO: 3.1 Handle 404 errors (missing resources)
// Handles 404. In Express, 404 responses are not the result of an error, 
// so the error-handler middleware will not capture them.
// To handle a 404 response, add a middleware function at the very bottom of the stack
// (below all other path handlers)
app.use(function (req, res) {
    res.status(404).sendFile(path.join(MSG_FOLDER + "/404.html"));
});

// TODO: 3.2 Handle server errors (50*s)
// Error handler: server error
app.use(function (err, req, res, next) {
    res.status(501).sendFile(path.join(MSG_FOLDER + '/501.html'));
});

// TODO: 1.4. Bind and listen to NODE_PORT so that your app could respond to client requests
// Server starts and listens on NODE_PORT
app.listen(NODE_PORT, function () {
    console.log("Server running at http://localhost:" + NODE_PORT);
});