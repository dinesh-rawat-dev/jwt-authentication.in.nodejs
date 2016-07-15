var express = require('express');
var router = express.Router();
var Controller = require('./userController.js');

var authorize = function(req, res, next) {
	console.log("Authentication..")
	var done = function(status) {
		if ( !status )
			return res.status(401).send({success: false, msg: "Authentication failed!"});
		next()
	}
	Controller.checkToken(req, res, done);
};

router.post('/login', Controller.login);
router.get('/', authorize, Controller.get);
router.post('/register', Controller.register);
router.get('/logout', Controller.logout);

module.exports = router;