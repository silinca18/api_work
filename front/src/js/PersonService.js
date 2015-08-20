"use strict";

var $ = require("jquery");
var baseUrl = "http://localhost:3000/api";

function PersonService () {
 
	this.add = function (data, callback){
		$.ajax(baseUrl + "/people", {
			method: "POST",
			data: JSON.stringify(data),
			success: function(person) {
				callback(data);
			},
			error: function () {
				alert('Something wen wrong. Please contact the administrator!');
			}
		});
	};

	this.deleteId = function (id, callback){
		$.ajax(baseUrl + "/people/" + parseInt(id), {
			method: "DELETE",
			success: function() {
				alert('Successfully deleted!');
				callback(id);
			},
			error: function () {
				alert('Something wen wrong. Please contact the administrator!');
			}
		});
	};

	this.editId = function (data, callback){
		$.ajax(baseUrl + "/people/",{
			method: "put",
			data:data,
			success: function() {
				callback(data);
			},
			error: function () {
				alert('Something wen wrong. Please contact the administrator!');
			}
		});
	};

	this.getAll = function(callback){
		$.ajax(baseUrl + "/people", {
			method: "get",
			success: function(data) {
				callback(data);
			},
			error: function () {
				alert('Something wen wrong. Please contact the administrator!');
			}
		});
	};

	//getAll

	//getById


	//update

	//delete
}

module.exports = PersonService;