'use strict';

// getAlbums-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This standard text removed and replace by empty schema 
//const getAlbumsSchema = new Schema({
//  text: { type: String, required: true },
//  createdAt: { type: Date, 'default': Date.now },
//  updatedAt: { type: Date, 'default': Date.now }
//});

// Third parameter added = name of collection
const getAlbumsModel = mongoose.model('getAlbums', 
                                      new Schema(),
                                      'imagesAlbums');

module.exports = getAlbumsModel;