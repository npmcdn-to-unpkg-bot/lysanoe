'use strict';

const service = require('feathers-mongoose');
const getAlbums = require('./getAlbums-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: getAlbums,
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/getAlbums', service(options));

  // Get our initialize service to that we can bind hooks
  const getAlbumsService = app.service('/getAlbums');

  // Set up our before hooks
  getAlbumsService.before(hooks.before);

  // Set up our after hooks
  getAlbumsService.after(hooks.after);
};
