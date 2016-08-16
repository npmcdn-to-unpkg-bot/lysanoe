'use strict';

// uploadImages-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Make Mongoose use the ES6 promise
mongoose.Promise = global.Promise;

//const uploadImagesSchema = new Schema({
//  imageId: { type: String, required: false },
//  caption: { type: String, required: false },
//  createdAt: { type: Date, 'default': Date.now },
//  updatedAt: { type: Date, 'default': Date.now }
//});

const imagesInfoModel = mongoose.model('uploadImages',
                                        new Schema(),
                                       'imagesInfo');

module.exports = imagesInfoModel;