'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('uploadImages service', function() {
  it('registered the uploadImages service', () => {
    assert.ok(app.service('uploadImages'));
  });
});
