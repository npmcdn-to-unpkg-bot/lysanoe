'use strict';
const uploadImages = require('./uploadImages');
const getAlbums = require('./getAlbums');
const getImage = require('./getImage');
const menuItems = require('./menuItems');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(menuItems);
  app.configure(getImage);
  app.configure(getAlbums);
  app.configure(uploadImages);
};
