// TODO: Insert and retrieve data to / from MySQL DB
// TODO: 1. Install and load sequelize
// TODO: 2. Set up MySQL connection
// TODO: 3. Define models and load models
// TODO: 4. Persist registration information

// DEPENDENCIES ------------------------------------------------------------------------------------------------------
// Loads express module and assigns it to a var called express
var express = require("express");

// Loads path to access helper functions for working with files and directory paths
var path = require("path");

// Loads bodyParser to populate and parse the body property of the request object
var bodyParser = require("body-parser");

// TODO: 1.1 Load sequelize, assign it to a variable called Sequelize
// Loads sequelize ORM
var Sequelize = require("sequelize");

// CONSTANTS ---------------------------------------------------------------------------------------------------------
// Defines server port.
// Value of NODE_PORT is taken from the user environment if defined; port 3000 is used otherwise.
const NODE_PORT = process.env.NODE_PORT || 8080;

// Defines paths
// __dirname is a global that holds the directory name of the current module
const CLIENT_FOLDER = path.join(__dirname + '/../client');  // CLIENT FOLDER is the public directory
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');

// TODO: 2.1 Define MYSQL constants
// Defines MySQL configuration
const MYSQL_USERNAME = 'root';
const MYSQL_PASSWORD = 'root';

// OTHER VARS ---------------------------------------------------------------------------------------------------------
// Creates an instance of express called app
var app = express();

//TODO :2.2 Create a connection with mysql DB
// Creates a MySQL connection
var sequelize = new Sequelize(
    'employees',
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    {
        host: 'localhost',         // default port    : 3306
        logging: console.log,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);

//TODO :3.2 Load Department model
var Department = require('./models/department')(sequelize, Sequelize);


// Serves files from public directory (in this case CLIENT_FOLDER).
// __dirname is the absolute path of the application directory.
// if you have not defined a handler for "/" before this line, server will look for index.html in CLIENT_FOLDER
app.use(express.static(CLIENT_FOLDER));


// Populates req.body with information submitted through the registration form.
// Expected content type is application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({extended: false}));
// Default $http content type is application/json so we use json as the parser type
app.use(bodyParser.json());


// Defines endpoint exposed to client side for registration
app.post("/departments", function (req, res) {
    // Information sent via an HTTP POST is found in req.body
    console.log('\nData Submitted');
    console.log('Dept No: ' + req.body.dept.id);
    console.log('Dept Name: ' + req.body.dept.name);

    // TODO: 4.1 Persist registration information
    Department
        .create({
            dept_no: req.body.dept.id,
            dept_name: req.body.dept.name
        })
        .then(function (department) {
            console.log(department.get({plain: true}));
            res
                .status(200)
                .json(department);
        })
        .catch(function (err) {
            console.log("error: " + err);
            res
                .status(500)
                .json(err);
        });
});


// Defines endpoint exposed to client side for retrieving all department information
app.get("/departments", function (req, res) {

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