'use strict';

const sharedTypes = require('..');
const assert = require('assert').strict;

assert.strictEqual(sharedTypes(), 'Hello from sharedTypes');
console.info('sharedTypes tests passed');
