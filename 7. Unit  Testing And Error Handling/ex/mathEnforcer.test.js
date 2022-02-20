const expect = require('chai').expect;
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer test function', () => {

    describe('addFive test function', () => {
        it('Should return undefines with parameter string', () => {
            expect(mathEnforcer.addFive('TEST')).to.be.undefined;
        });
        it('Should return undefines with parameter array', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it('Should return undefines with parameter object', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('Should return undefines with parameter null', () => {
            expect(mathEnforcer.addFive(null)).to.be.undefined;
        });
        it('Should return undefines with parameter undefines', () => {
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });
        // Correct Input
        it('Should return positive number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('Should return negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('Should return decimal number', () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });
    });
    describe('subtractTen test function', () => {
        it('Should return undefines with parameter string', () => {
            expect(mathEnforcer.subtractTen('TEST')).to.be.undefined;
        });
        it('Should return undefines with parameter array', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
        it('Should return undefines with parameter object', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        it('Should return undefines with parameter null', () => {
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        });
        it('Should return undefines with parameter undefines', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });
        // Correct Input
        it('Should return integer number', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('Should return negative number', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('Should return decimal number', () => {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5);
        });
    });
    describe('sum test function', () => {

        it('Should return undefines with parameter string', () => {
            expect(mathEnforcer.sum('TEST', 20)).to.be.undefined;
        });
        it('Should return undefines with parameter array', () => {
            expect(mathEnforcer.sum(20, '20')).to.be.undefined;
        });

        //correct input
        it('Two positive numbers', () => {
            expect(mathEnforcer.sum(10, 20)).to.equal(30);
        });
        it('Two negative numbers', () => {
            expect(mathEnforcer.sum(-10, -2.5)).to.equal(-12.5);
        });
        it('Two decimal numbers', () => {
            expect(mathEnforcer.sum(10.5, 2.1)).to.equal(12.6);
        });
    });
});