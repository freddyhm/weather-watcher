({
	
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
		'backbone':{
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
	},

	appDir: "../",
	baseUrl: "js",
	dir: "../../app-build",
	modules: [
		{
			name: "main"
		}
	]
})