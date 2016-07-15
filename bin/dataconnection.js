/*
# Dataconnection
*/
// var mongoose = require('./mongoose').get();
var mongoose = require('mongoose');
module.exports = function(app) {
	var config = require('./config')[app.get('env')];

	mongoose.connect(config.url, function (error) {
	    if (error) {
	        console.log(error);
	    } else {
	    	console.info("Connected to the database: " + config.database)
	    }
	});
}