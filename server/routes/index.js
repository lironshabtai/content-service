function routes(app) {
	require('./categories')(app);
	require('./posts')(app);
	require('./menus')(app);
	require('./tags')(app);
}

module.exports = routes;
