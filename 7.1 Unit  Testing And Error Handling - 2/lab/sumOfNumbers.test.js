const sum = require('./sumOfNumbers');
const expect = require('chai').expect;

describe('Check functionality', () => {


    it('Should give 1 when we receive true as a parameter', () => {
        expect(sum([true])).to.equal(1);
    });

    it('Should give 0 when there are no parameters that are being added', () => {
        // let array = [];
        // let expectSum = 0;
        // let actualSum = sum(array);
        // expect(actualSum).to.equal(expectSum);
        // expect(sum([null])).to.equal(0);
        expect(sum([false])).to.equal(0);
    });

    it('Should check if the input is arr', () => {

        let array = [3, 2, 5, 7];
        let expectedSum = 17;

        let actualSum = sum(array);

        expect(actualSum).to.equal(expectedSum, 'not equal');
    });
});