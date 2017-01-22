// Loads express module and assigns it to a var called express
var express = require("express");

// Loads path to access helper functions for working with files and directory paths
var path = require("path");

// Loads bodyParser to populate and parse the body property of the request object
var bodyParser = require("body-parser");

// Create an instance of Express
var app = express();

// Defines server port.
// Value of NODE_PORT is taken from the user environment if defined; port 3000 is used otherwise.
const NODE_PORT = process.env.NODE_PORT || 3000;

// Defines paths
// __dirname is a global that holds the directory name of the current module
const CLIENT_FOLDER = path.join(__dirname + '/../client');  // CLIENT FOLDER is the public directory
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');



// Serves files from public directory (in this case CLIENT_FOLDER).
// __dirname is the absolute path of the application directory.
// if you have not defined a handler for "/" before this line, server will look for index.html in CLIENT_FOLDER
app.use(express.static(CLIENT_FOLDER));

// Populates req.body with information submitted through the registration form.
// Expected content type is application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Defines endpoint exposed to client side for registration
app.post("/register", function (req, res, next) {
    console.log('\nData Submitted');
    console.log('Dept No: ' + req.body.deptNo);
    console.log('Dept Name: ' + req.body.deptname);
    res.status(200).sendFile(path.join(CLIENT_FOLDER + "/thanks.html"));
});


// Error handler: missing resource
// Handles 404. In Express, 404 responses are not the result of an error,
// so the error-handler middleware will not capture them.
// To handle a 404 response, add a middleware function at the very bottom of the stack
// (below all other path handlers)
app.use(function (req, res) {
    res.status(404).sendFile(path.join(MSG_FOLDER + "/404.html"));
});

// Error handler: server error
app.use(function (err, req, res, next) {
    res.status(501).sendFile(path.join(MSG_FOLDER + '/501.html'));
});

// Server starts and listens on NODE_PORT
app.listen(NODE_PORT, function () {
    console.log("Server running at http://localhost:" + NODE_PORT);
});