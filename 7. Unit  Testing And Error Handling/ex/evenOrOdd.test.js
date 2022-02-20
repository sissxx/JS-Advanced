const expect = require('chai').expect;
const isOddOrEven = require('./evenOrOdd');

describe('isOddOrEven test functionality', () => {

    // input value
    it('Return undefined if the input is an array', () => {
        expect(isOddOrEven([])).to.undefined;
    });
    it('Return undefined if the input is an object', () => {
        expect(isOddOrEven({})).to.undefined;
    });
    it('Return undefined if the input is a number', () => {
        expect(isOddOrEven(1)).to.undefined;
    });
    it('Return undefined if the input is undefined', () => {
        expect(isOddOrEven(1)).to.undefined;
    });

    // input length
    it('Return even if the input is rigth', () => {
        expect(isOddOrEven('Hi')).to.be.equal('even');
    });
    it('Return odd if the input is not rigth', () => {
        expect(isOddOrEven('Hello')).to.be.equal('odd');
    });
})