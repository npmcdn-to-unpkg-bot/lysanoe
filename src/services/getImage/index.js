'use strict';

const service = require('feathers-mongoose');
const getImageModel = require('./getImage-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: getImageModel,
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/getImages', service(options));

  // Get our initialize service to that we can bind hooks
  const getImageService = app.service('/getImages');

  // Set up our before hooks
  getImageService.before(hooks.before);

  // Set up our after hooks
  getImageService.after(hooks.after);
};
