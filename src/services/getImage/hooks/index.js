'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    // TODO reinstate authorization token here 
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
      // Sort on createdAt date
      hook.result.sort(function (a, b){
          var aDate = a._doc.createdAt;
          var bDate = b._doc.createdAt;
          
          if (!aDate && !bDate) {
              return 0;
          } else if (!aDate) {
              return -1;
          } else if (!bDate) {
              return 1;
          } else if (aDate == bDate) {
            return 0
          }
          return aDate > bDate;  //dates.compare(a, b);
      });
      
  },

  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
