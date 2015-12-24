
// loads classes that the main module needs

define([
	'app/views/app',
	'app/routers/router',
	'app/models/app'
], function(AppView, Router, AppModel){

	'use strict';

	var id = 'content';

	// init function
	var initialize = function(){
		// create app
		var appModel = new AppModel({id: 1});

		var appView = new AppView({model: appModel});

		$('body').append(appView.render().el);

		// init the router with our app view
		var router = new Router(appView);

		// monitors the url for any hash links that need to be converted into actions
		Backbone.history.start();

		appModel.fetch();
	}

	return {
		initialize: initialize
	}
});