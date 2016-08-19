'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('getVideos service', function() {
  it('registered the getVideos service', () => {
    assert.ok(app.service('getVideos'));
  });
});
