module.exports = function(app, passport) {
	require('./fortest.app.js')(app);
	require('../app/routes/test.routes')(app);
	require('../app/routes/time.routes')(app);
	// require('../app/routes/query.routes')(app, passport);
	
	require('../app/routes/passport.routes.js')(app, passport);
}
