module.exports = function(app) {
	var appConfig = require('../bin/config')[app.get('env')];
    app.use(appConfig.appV1 + "users", require('./v1/users/'));
};