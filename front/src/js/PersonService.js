"use strict";

var $ = require("jquery");
var baseUrl = "http://localhost:3000/api";

function PersonService () {
 
	this.add = function (data, callback){
		$.ajax(baseUrl + "/people", {
			method: "post",
			data: data,
			success: function(data) {
				callback(data);
			}
		});
	};

	this.getAll = function(callback){
		$.ajax(baseUrl + "/people", {
			method: "get",
			 
			success: function(data) {
				callback(data);
			}
		});
	};

	//getAll

	//getById


	//update

	//delete
}

module.exports = PersonService;