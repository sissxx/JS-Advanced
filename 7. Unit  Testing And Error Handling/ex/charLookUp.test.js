const expect = require('chai').expect;
const lookupChar = require('./charLookUp');

describe('lookupChar functionality test', () => {
    it('Return undefined if the input string is an array', () => {
        expect(lookupChar([])).to.be.undefined;
    });
    it('Return undefined if the input string is an object', () => {
        expect(lookupChar({})).to.be.undefined;
    });
    it('Return undefined if the input string is an number', () => {
        expect(lookupChar(1)).to.be.undefined;
    });
    it('Return undefined if the input string is an undefined', () => {
        expect(lookupChar(undefined)).to.be.undefined;
    });

    it('Return undefined if the input index is not a number', () => {
        expect(lookupChar('')).to.be.undefined;
    });
    it('Return undefined if the input index is not a number', () => {
        expect(lookupChar([])).to.be.undefined;
    });
    it('Return undefined if the input index is not a number', () => {
        expect(lookupChar({})).to.be.undefined;
    });
    it('Return undefined if the input index is not a number', () => {
        expect(lookupChar(null)).to.be.undefined;
    });
    it('Return undefined if the input index is not a number', () => {
        expect(lookupChar('')).to.be.undefined;
    });
    it('Return undefined with string and decimal', () => {
        expect(lookupChar('Love', 10.5)).to.be.undefined;
    });

    it('Return undefined if first  arg is not string', () => {
        expect(lookupChar(100, 10)).to.be.undefined;
    });

    it('Return Incorrect index if the string length is bigger than  index', () => {
        expect(lookupChar('Hi', 3)).to.be.equal('Incorrect index');
    });
    it('Return Incorrect index if the index is negative number', () => {
        expect(lookupChar('Hi', -3)).to.be.equal('Incorrect index');
    });
    it('Return Incorrect index if the string is empty', () => {
        expect(lookupChar('', 1)).to.be.equal('Incorrect index');
    });
    it('Return Incorrect index if the string is empty', () => {
        expect(lookupChar('', 0)).to.be.equal('Incorrect index');
    });

    //  return string.charAt(index);
    it('Return  char at index', () => {
        expect(lookupChar('Love', 1)).to.be.equal('o');
    });
    it('Return  char at index', () => {
        expect(lookupChar('L', 0)).to.be.equal('L');
    });

});