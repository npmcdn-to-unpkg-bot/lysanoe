'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');


exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all(hook) {
      //console.log('afhookall:', hook.result[0]);  
  },
  find(hook) {
      //console.log('afhookfind:', hook.result);
      
      // Filter only public menuItems
      hook.result = hook.result.filter(function(menuItem) {
          // The result object data is available through the _doc property !! 
          return parseInt(menuItem._doc.allowedFor) <= 0;
      });     
      
      // Sort on sequence
      hook.result.sort(function (a, b){
          var aSeq = parseInt(a._doc.sequence);
          var bSeq = parseInt(b._doc.sequence);
          return aSeq - bSeq;
      });
      
  },
  get(hook) {},
  create: [],
  update: [],
  patch: [],
  remove: []
};
