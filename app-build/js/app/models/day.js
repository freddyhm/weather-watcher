define(["backbone"],function(e){"use strict";var t=e.Model.extend({defaults:{weekday:"",highCelsius:null,lowCelsius:null,highFahrenheit:null,lowFahrenheit:null,icon_url:"",conditions:""},parse:function(e){var t={weekday:e.date.weekday,highCelsius:e.high.celsius,lowCelsius:e.low.celsius,highFahrenheit:e.high.fahrenheit,lowFahrenheit:e.low.fahrenheit,icon_url:e.icon_url,conditions:e.conditions};return t}});return t});