'use strict';

const authentication = require('feathers-authentication');

const FacebookStrategy = require('passport-facebook').Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');
const GithubStrategy = require('passport-github').Strategy;
const GithubTokenStrategy = require('passport-github-token');

module.exports = function() {
  const app = this;

  let config = app.get('auth');
//console.log('configServer', config);

  config.facebook.strategy = FacebookStrategy;
  config.facebook.tokenStrategy = FacebookTokenStrategy;
  config.github.strategy = GithubStrategy;
  config.github.tokenStrategy = GithubTokenStrategy;

  app.set('auth', config);
  app.configure(authentication(config));
};
