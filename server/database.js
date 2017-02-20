var Sequelize = require('sequelize');
var config = require("./config");
var database;

database = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password, {
        host: config.mysql.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

var UserModel = require("./api/user/user.model")(database);
var PostModel = require("./api/post/post.model")(database);


module.exports = {
    User: UserModel,
    Post: PostModel
};

// BEGIN: MYSQL RELATIONS


// END: MYSQL RELATIONS

database.sync().then(function () {
    console.log("Database in Sync Now")
});



