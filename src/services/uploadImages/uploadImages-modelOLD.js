'use strict';

// uploadImages-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const uploadImagesSchema = new Schema({
//  text: { type: String, required: true },
//  createdAt: { type: Date, 'default': Date.now },
//  updatedAt: { type: Date, 'default': Date.now }
//});

const uploadImagesModel = mongoose.model('uploadImages',
                                         new Schema(),
                                         'imagesInfo');

module.exports = uploadImagesModel;