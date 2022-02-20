const isSymmetric = require('./checkForSymmetry');
const expect = require('chai').expect;

describe('Symmetric Array', () => {

    //input tests
    it('return false if input is number', () => {
        expect(isSymmetric(3)).to.be.false;
    });

    it('return false if input is string', () => {
        expect(isSymmetric('3')).to.be.false;
    });

    it('return false if input is object', () => {
        expect(isSymmetric({})).to.be.false;
    });

    it('return false if input is null', () => {
        expect(isSymmetric(null)).to.be.false;
    });

    //non-symmetric tests
    it('return false if array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('return false if array is not symmetric with negative num', () => {
        expect(isSymmetric([1, 2, -1])).to.be.false;
    });

    //symetric tests
    it('return true if array is symmetric', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('return true if one number array is symmetric', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('return true if diff comp array is symmetric', () => {
        expect(isSymmetric([1, {}, 'blabla', {}, 1])).to.be.true;
    });

});