/*global $ */

var EmployeeView = function(adapter, template, employee) {
	'use strict';

	this.initialize = function() {
		this.el = $('<div/>');
	};

	this.render = function() {
		this.el.html(template(employee));
		return this;
	};

	this.initialize();
};