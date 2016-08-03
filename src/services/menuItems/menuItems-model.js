'use strict';

// menuItems-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItemsModel  = mongoose.model('menuItems',
                                       new Schema(),
                                       'adminModules');

module.exports = menuItemsModel;