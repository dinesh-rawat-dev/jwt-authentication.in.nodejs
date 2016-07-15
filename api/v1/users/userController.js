/*
@ usersController- login/logout/meeting/cancel meeting etc.
*/
var express = require('express'),
	app = express();
    router = express.Router(),
    config = require('../../../bin/config'),
    User = require('./user');
    var jwt    = require('jsonwebtoken');
var env = process.env.NODE_ENV || 'development';
var config = require('../../../bin/config')[env];

/*
@ Login user
*/
exports.login = function(req, res, next) {
    console.log("login action invoked....");
    var payload = req.body;

    var cb = function(err, info) {
    	if (err) {
            return res.status(401).send({
                success: false,
                err: "Username and password mismatched!"
            });
        }
        var token = jwt.sign(info.user, config.superSecret, { expiresIn : 60*60*24 });
        info.user.token = token

	    User.findOneAndUpdate({_id: info.user._id}, {token: token}, {upsert:false}, function(err, doc){
		    if (err) return res.send(500, { error: err });
		        return res.send({
		            success: true,
		            msg: info.message,
		            user: info.user
		        });
		 });
    }
    User.isValidUserPassword(payload.username, payload.password, cb)
}
/*
@Sets logsOut the user and sets pending logout to one
*/
exports.logout = function(req, res, next) {
    console.log("logout.... ");
    User.findOneAndUpdate({token: req.headers['authorization']}, {token: null}, {upsert:false}, function(err, doc){
	    if (err) return res.send(500, { error: err });
	    return res.send({
	        success: true,
	        msg: "User loggedout successfully"
	    });
	 });
}

/*
@Sets get user profile
*/
exports.get = function(req, res, next) {
    console.log("get user profile.... ");
    var user = jwt.decode(req.headers['authorization']);
    delete user.iat;
    delete user.exp;
    delete user.token;
    return res.send({success: true, usr: user})
}

/*
@Sets get user profile
*/
exports.checkToken = function(req, res, next) {
  User.findOne({token: req.headers['authorization']},function(err, doc){
  		console.log(doc)
	    if (err || !doc) next(false);
		next(true)
	 });
}


/*
@User registration
*/
exports.register = function(req, res, next) {
    console.log('Register user..');
    var payload = req.body;
    var user = new User(payload);

    var userSaved = function(err, usr) {
        if (err) {
            throw new Error(err);
        }
        var usr = usr.toObject();
        delete usr.password;
        delete usr.__v;
        return res.send({
            success: true,
            user: usr
        });
    };
    user.save(userSaved);

}