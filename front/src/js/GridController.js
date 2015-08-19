"use strict";

var PersonService = require("./PersonService");
var $ = require("jquery");
var baseUrl = "http://localhost:3000/api";
init();

function init(){
	var personService = new PersonService();

	//var jsonData = '[{"rank":"9","content":"Alon","UID":"5"},{"rank":"6","content":"Tala","UID":"6"}]';
	
	// personService.add(
	// 	{id:2,
	// 	firstName: "Ion",
	// 	 lastName: "Vasile",
	// 	 age : 25}, function(){	console.log("Added the person");
	// 	});

	personService.populate();
	// personService.deleteId();


	// personService.editId(
	// 	{id:1,
	// 	firstName: "update",
	// 	 lastName: "update",
	// 	 age : 10}, function(){	console.log("Update id");
	// 	});

	// personService.getAll( function(data){ 
	// 	 console.log(data);
	// });

}