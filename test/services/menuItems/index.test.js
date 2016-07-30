'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('menuItems service', function() {
  it('registered the menuItems service', () => {
    assert.ok(app.service('menuItems'));
  });
});
