'use strict';

// menuItems-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

//const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//
//const menuItemsSchema = new Schema({
//  text: { type: String, required: true },
//  createdAt: { type: Date, 'default': Date.now },
//  updatedAt: { type: Date, 'default': Date.now }
//});
//
//const menuItemsModel = mongoose.model('menuItems', menuItemsSchema);
//
//module.exports = menuItemsModel;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//var menuItemsSchema = new Schema ({
//    longName: {type: String}  
//});

const menuItemsModel  = mongoose.model('menuItems', new Schema() /*menuItemsSchema*/, 'adminModules');

module.exports = menuItemsModel;