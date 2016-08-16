'use strict';

// getImage-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getImagesSchema = new Schema({
    imageId:    { type: String, required: false },
    caption:    { type: String, required: false },
    lastUpload: { type: Number },
    isOriginal: { type: Number },
    inSlider:   { type: Number },
    visibility: { type: Number },
    albums:     { type: Array },
    createdAt:  { type: Date, 'default': Date.now },
    updatedAt:  { type: Date, 'default': Date.now }
});

// Third parameter added = name of collection
const getImagesModel = mongoose.model('getImage',
                                       getImagesSchema,
                                      'imagesInfo');

module.exports = getImagesModel;