'use strict';

var wrap = require('../');
var assert = require("assert");

describe('array-wrap', function() {

  describe('BasicType', function() {
    it('should wrap number', function() {
      assert.deepEqual(wrap(1), [1])
    });
    it('should wrap string', function() {
      assert.deepEqual(wrap('a'), ['a'])
    });
    it('should wrap object', function() {
      assert.deepEqual(wrap({}), [{}])
    });
  });

  describe('Array', function() {
    it('should not wrap array', function() {
      assert.deepEqual(wrap(['x', 'y', 'z']), ['x', 'y', 'z'])
    });
    it('should not wrap empty array', function() {
      assert.deepEqual(wrap([]), [])
    });
  });

  describe('IrregularType', function() {
    it('should not wrap undefined', function() {
      assert.deepEqual(wrap(undefined), [])
    });
    it('should not wrap null', function() {
      assert.deepEqual(wrap(null), [])
    });
    it('should not wrap NaN', function() {
      assert.deepEqual(wrap(NaN), [])
    });
  });

  describe('GlobalObject', function() {
    it('should wrap Date', function() {
      var date = new Date();
      assert.deepEqual(wrap(date), [date])
    });
    it('should wrap RegExp', function() {
      var regexp = /^/;
      assert.deepEqual(wrap(regexp), [regexp])
    });
    it('should wrap Error', function() {
      var err = new Error();
      assert.deepEqual(wrap(err), [err])
    });
    it('should wrap Function', function() {
      var fn = function() {};
      assert.deepEqual(wrap(fn), [fn])
    });
  });

});
