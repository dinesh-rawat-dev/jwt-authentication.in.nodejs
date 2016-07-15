/*
# Start of the project
*/
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
require('./bin/mongoose').set(require('mongoose'));
var expressSession = require('express-session');
app.use(expressSession({secret:'somesecrettokenhere'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
require('./bin/www')(app, require('http'));
require('./bin/dataconnection')(app);
require('./api')(app);

module.exports = app;
