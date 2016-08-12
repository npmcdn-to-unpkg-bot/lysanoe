'use strict';

// getImage-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This standard text removed and replace by empty schema 
//const getImageSchema = new Schema({
//  text: { type: String, required: true },
//  createdAt: { type: Date, 'default': Date.now },
//  updatedAt: { type: Date, 'default': Date.now }
//});

// Third parameter added = name of collection
const getImageModel = mongoose.model('getImage',
                                     new Schema(),
                                     'imagesInfo');

module.exports = getImageModel;