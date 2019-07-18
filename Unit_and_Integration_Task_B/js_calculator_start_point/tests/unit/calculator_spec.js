var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function () {
    assert.equal(true, true)
  })

  it('it should have working add function', function () {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(5, calculator.runningTotal)
  })

  it('it should have working subtract function', function () {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

  it('it should have working multiply function', function () {
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(15, calculator.runningTotal)
  })

  it('it should have working divide function', function () {
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

  it('it should concatenate multiple number button clicks', function () {
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(4)
    assert.equal(234, calculator.runningTotal)
  })

  it('it should chain multiple operations together', function () {
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(10)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(5, calculator.runningTotal)
  })

  it('it should clear the running total without affecting the calculation', function () {
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(10)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.clearClick()
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

});
