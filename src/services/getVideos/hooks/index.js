'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    //auth.verifyToken(),
    //auth.populateUser(),
    //auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find(hook) {
      // Sort on orderBy
      // b-a => descending
      // We need the ._doc property ... why ????
      hook.result.sort(function (a, b){
          return b._doc.orderBy - a._doc.orderBy  
      });
  },
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
