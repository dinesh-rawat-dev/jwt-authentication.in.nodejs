/*
@ mongoose setter and getters
*/
var mongo = null;

exports.set = function(mongoose) {
	mongo = mongoose;
}

exports.get = function() {
    return mongo;
}