 define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/places',
	'app/views/place',
	'app/views/add_place'
], function ($, _, Backbone, PlacesCollection, PlaceView, AddPlaceView){
	 'use strict';

	 var DashView = Backbone.View.extend({

	 html: [
			'<h3>Dashboard page</h3>',
			'<div id="places-list" class="clearfix">Loading...</div>',
			'<div id="dash-buttons"></div>',
				'<button id="btn-add-new" type="button" class="btn btn-default">Add new</button>',
				'</div>' 
		].join(''),

		views: [],

		events: {
			'click #btn-add-new': 'addNewPlace'
		},

	 	initialize: function(){

	 		// adding html to our view element
	 		// caching jquery 
	 		this.$el.html(this.html);
	 		this.$placesList = this.$('#places-list');
	 		this.$dashButtons = this.$('#dash-buttons');	

	 		this.collection = new PlacesCollection([]);
	 		
	 		// binds listener event to model, triggering the render 
	 		// method when it detects change 
	 		this.listenTo(this.collection, 'change destroy', this.render);
	 		this.collection.fetch();

	 		window.debug  = {
	 			places: this.collection
	 		}
	 	},

	 	render: function(){

	 		var that = this;
	 		this.cleanUp();

	 		// check if collection has models
	 		if(this.collection.length){

	 			// convert data to json and push to our array
	 			this.collection.each(function(element, index, list){
	 				var place = new  PlaceView({
	 					model: element,
	 					id: ['place-', element.get('countryCode'), '-', element.get('name')].join('')
	 				});
	 				that.$placesList.append(place.render().el);
	 				that.views.push(place);
	 			});

	 		}else{
	 			this.$placesList.html('Sorry, there are no places to display, please add some');
	 		}

	 		return this;
	 	},

	 	cleanUp: function(){

	 		for (var i = 0; i < this.views.length; i++) {
	 			this.views[i].remove();
	 		}

	 		// clear array 
	 		this.views.length = 0;
	 		this.$placesList.html('');
	 	},

	 	addNewPlace: function(e){
	 		var modal = new AddPlaceView({
	 			title: 'Add a new place',
	 			id: 'modal-add-new-place',
	 			collection: this.collection 
	 		});
	 		modal.show();
	 	}

	 });

	 return DashView;
});