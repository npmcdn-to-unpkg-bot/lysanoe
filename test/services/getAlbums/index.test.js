'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('getAlbums service', function() {
  it('registered the getAlbums service', () => {
    assert.ok(app.service('getAlbums'));
  });
});
