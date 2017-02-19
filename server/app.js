// TODO: Send and retrieve information from server via Angular $http
// TODO: 4. Update handling of /register to match client-side changes
// TODO: 5. In register (departments) handler, return a status instead of a thank you page.
// TODO: 10. Define route that handles GET /departments (request from getAllDept)
// TODO: 10a. Move vm.departments content from search.controller.js to here

// Loads express module and assigns it to a var called express
var express = require("express");

// Loads path to access helper functions for working with files and directory paths
var path = require("path");

// Loads bodyParser to populate and parse the body property of the request object
var bodyParser = require("body-parser");

// Creates an instance of express called app
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


// TODO: 4.1 Update the body parser type to match the data format sent through $http
// TODO: 4.1a Instead of deleting bodyParser.urlencoded comment it out so you could refer to in the future
// Populates req.body with information submitted through the registration form.
// Expected content type is application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({extended: false}));
// Default $http content type is application/json so we use json as the parser type
app.use(bodyParser.json());


// TODO: 4.2 Update register route to route used by client app
// Defines endpoint exposed to client side for registration
app.post("/departments", function (req, res) {
    // TODO: 4.3 client-side has changed the data structure sent to server, reflect that change here
    // Information sent via an HTTP POST is found in req.body
    console.log('\nData Submitted');
    console.log('Dept No: ' + req.body.dept.id);
    console.log('Dept Name: ' + req.body.dept.name);

    // TODO: 5.1 Send a 200 status instead of a thank you page
    // TODO: 5.1a Instead of deleting serving of thanks.html, comment it out so you could refer to in the future
    // res.sendFile responds with a thank you page to client. This property also ends the req/res cycle.
    // res.status sets the status code sent to client.
    // res.status(200).sendFile(path.join(CLIENT_FOLDER + "/thanks.html"));

    // res.status sets the status code sent back to client. Append end() to this chain to end the HTTP req/res cycle.
    // Failure to do so would cause your app to hang
    res.status(200).end();
});

// TODO: 10.1 Create the HTTP GET /departments handler
// Defines endpoint exposed to client side for retrieving all department information
app.get("/departments", function (req, res) {

    // TODO: 10.2 Move contents of vm.departments from search.controller.js to here
    // Departments contain all departments and is the data returned to client
    var departments = [
        {
            deptNo: 1001,
            deptName: 'Admin'
        }
        , {
            deptNo: 1002,
            deptName: 'Finance'
        }
        , {
            deptNo: 1003,
            deptName: 'Sales'
        }
        , {
            deptNo: 1004,
            deptName: 'HR'
        }
        , {
            deptNo: 1005,
            deptName: 'Staff'
        }
        , {
            deptNo: 1006,
            deptName: 'Customer Care'
        }
        , {
            deptNo: 1007,
            deptName: 'Support'
        }
    ];

    // TODO: 10.3 Return the departments information as a json object
    // Return departments as a json object
    res.json(200, departments);
});


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