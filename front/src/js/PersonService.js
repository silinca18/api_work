"use strict";

var $ = require("jquery");
var baseUrl = "http://localhost:3000/api";

function PersonService () {
 
	this.add = function (data, callback){
		$.ajax(baseUrl + "/people", {
			method: "post",
			data: data,
			success: function(data) {
				// callback(data);
				console.log("added person");
			}
		});
	};

	this.deleteId = function (id){
		$.ajax(baseUrl + "/people/" + id, {
			method: "delete",
			success: function() {
				console.log("deleted");
			}
		});
	};

	this.editId = function (data){
		$.ajax(baseUrl + "/people/",{
			method: "put",
			data:data,
			success: function() {
				console.log("updated");
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
	
	this.populate = function (firstName){
    $.ajax(baseUrl + "/people/" + firstName , {
    	method : 'POST',
    	success: function (response) {
        	var trHTML = '';
        	$.each(response, function (i, item) {
            	trHTML += '<tr><td>' + item.firstName + '</td></tr>';
        	});
        	$('#records_table').append(trHTML);
    
}});
};

	//getAll

	//getById


	//update

	//delete
}

module.exports = PersonService;