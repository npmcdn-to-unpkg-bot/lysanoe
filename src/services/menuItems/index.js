'use strict';

const service = require('feathers-mongoose');
const menuItems = require('./menuItems-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: menuItems,
    //paginate: false
    //$sort: {sequence: 1},
    paginate: {
        default: 25,
        max: 11
    }
  };

  // Initialize our service with any options it requires
  app.use('/menuItems', service(options));

  // Get our initialize service to that we can bind hooks
  const menuItemsService = app.service('/menuItems');

  // Set up our before hooks
  menuItemsService.before(hooks.before);

  // Set up our after hooks
  menuItemsService.after(hooks.after);
};
