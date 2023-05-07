const isOddOrEven = require('./3.evenOrOdd')
const { assert } = require('chai')

describe('isOddOrEven function tests', () => {
  it('should return undefined if parameter is a number', () => {
    assert.equal(isOddOrEven(10), undefined)
  });
  it('should return undefined if parameter is an object', () => {
    assert.equal(isOddOrEven({}), undefined)

  });
  it('should return undefined if parameter is an array', () => {
    assert.equal(isOddOrEven([]), undefined)

  });
  it('should return undefined if parameter is an undefined', () => {
    assert.equal(isOddOrEven(undefined), undefined)

  });
  it('should return undefined if parameter is an null', () => {
    assert.equal(isOddOrEven(null), undefined)

  });
  it('should return even', () => {
    assert.equal(isOddOrEven('Hi'), 'even')

  });
  it('should return even', () => {
    assert.equal(isOddOrEven('H'), 'odd')

  });
});