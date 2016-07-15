module.exports = {
	"development": {
		"app_port": 3000,
		"url": "mongodb://127.0.0.1:27017/passport-jwt",
		"host": "127.0.0.1",
		"database": "passport-jwt",
		"password": "",
		"port": 27017,
	    'superSecret': '05081988supersecret',
	    'appV1': '/api/v1/',
	},
	"production": {
		"app_port": 8888,
		"url": "mongodb://127.0.0.1:27017/passport-jwt",
		"host": "127.0.0.1",
		"database": "passport-jwt",
		"password": "",
		"port": 27017,
	    'superSecret': '05081988supersecret',
    	'appV1': '/api/v1/',
	}
}