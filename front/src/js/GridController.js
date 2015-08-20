"use strict";
var $ = require("jquery");
var personService = require("./PersonService");

$(document).ready(function () {
	GridView.init();
});

var GridView = {
	init: function(){
		personService = new personService();
		personService.getAll($.proxy(this.renderPersons, this));
		this.atachEvents();
	},
	renderPersons: function (persons) {
		if (persons) {
			$.map(persons, $.proxy(this.renderPerson, this));
		}  
	},
	renderPerson: function (person) {
		if ($('table tr[id=' + person.id + ']')){
			$('table tr[id=' + person.id + ']').remove();
		}

		var $row = $('<tr></tr>').attr({'id': person.id});
		$row.append("<td><a href='javascript:void(0)' class='edit'>Edit      </a>"+
			"<a href='javascript:void(0)' class='delete'>Delete</a></td>");
		var columnsOrder = ['id', 'firstName', 'lastName', 'age'];
		for(var key in columnsOrder) {
		    $row.append(
		    	$('<td></td>').attr({'class': columnsOrder[key]}).html(person[columnsOrder[key]])
		    );
		}
		$('#records-table').append($row);
	},
	atachEvents: function () {
		var $parent = $('table');
		$('form').on('click', '.save', $.proxy(this.addElement, this));
		$parent.on('click', '.edit', this.editElement);
		$parent.on('click', '.delete', $.proxy(this.deleteElement, this));
	},
	addElement: function (ev) {
		ev.preventDefault();
		ev.stopPropagation();
		var $form = $('form');

		var newPerson = {
			firstName: $form.find('.firstName').val(),
			lastName: $form.find('.lastName').val(),
			age: $form.find('.age').val(),
			id: $form.find('.id').val()
		};

		if ($('table tr[id=' + $form.find('.id').val() + ']')){
			personService.editId(newPerson, this.renderPerson);
			$('form').find('.id').prop('disabled', false);
			$('form').find('input:not(:submit)').val('');
		} else {
			personService.add(newPerson, this.renderPerson);
		}		
	},
	editElement: function (ev) {
		var $row = $(ev.target).closest('tr');
		var $form = $('form');

		$form.find('.id').val(parseInt($row.find('.id').html())).prop('disabled', true);
		$form.find('.firstName').val($row.find('.firstName').html());
		$form.find('.lastName').val($row.find('.lastName').html());
		$form.find('.age').val(parseInt($row.find('.age').html()));
	},
	deleteElement: function (ev) {
		var $row = $(ev.target).closest('tr');
		var rowId = $row.find('.id').html();
		personService.deleteId(rowId, this.removeDomElement);
	},
	removeDomElement: function(id){
		$('table tr[id=' + id + ']').remove();
	}
};