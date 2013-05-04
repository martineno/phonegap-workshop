/*global Handlebars, $, MemoryAdapter */

var HomeView = function(adapter, template, listItemTempalte) {
	'use strict';

	this.initialize = function () {
		this.el = $('<div/>');
		this.el.on('keyup', '.search-key', this.findByName);
	};

	this.render = function() {
		this.el.html(template());
		return this;
	};

    this.findByName = function() {
        adapter.findByName($('.search-key').val()).done(function (employees) {
            $('.employee-list').html(listItemTempalte(employees));
        });
    };

	this.initialize();
};