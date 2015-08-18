"use strict";

var PersonService = require("./PersonService");

init();

function init(){
	var personService = new PersonService();

	personService.add(
		{firstName: "Ion",
		 lastName: "Vasile",
		 age : 25}, function(){	console.log("Added the person");
		});

	personService.getAll( function(data){ 
		  console.log(data);
		
		});

}