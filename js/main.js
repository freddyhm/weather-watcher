// require is a dependency manager or package manager

// backbone.js is the framework

// underscore.js is a library with utility classes for backbone.js

require.config({

	paths: {
		'jquery': 'libs/jquery-1.9.1',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'backbone.localStorage': 'libs/backbone.localStorage'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap':{
			deps: [
				'jquery'
			]
		}
	}

});

require([
	'backbone',
	'app/app',
	'bootstrap'
], function (Backbone, App, bootstrap){
	'use strict';

	App.initialize();
});
