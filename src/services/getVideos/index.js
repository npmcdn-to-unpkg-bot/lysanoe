'use strict';

const service = require('feathers-mongoose');
const getVideos = require('./getVideos-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: getVideos,
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/getVideos', service(options));

  // Get our initialize service to that we can bind hooks
  const getVideosService = app.service('/getVideos');

  // Set up our before hooks
  getVideosService.before(hooks.before);

  // Set up our after hooks
  getVideosService.after(hooks.after);
};
