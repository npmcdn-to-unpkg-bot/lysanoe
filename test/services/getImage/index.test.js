'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('getImage service', function() {
  it('registered the getImages service', () => {
    assert.ok(app.service('getImages'));
  });
});
