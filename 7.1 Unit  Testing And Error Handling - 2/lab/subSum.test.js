const subSum = require('./subSum');
const expect = require('chai').expect;

describe('Should calculate the sum of array Numbers', () => {

    it('Should check if the input is array', () => {
        expect(subSum(10, 1, 2)).to.be.NaN;
        expect(subSum({}, 1, 2)).to.be.NaN;
        expect(subSum(null, 1, 2)).to.be.NaN;
        expect(subSum(undefined, 1, 2)).to.be.NaN;
        expect(subSum(true, 1, 2)).to.be.NaN;
    });
    it('Should check if the endIndex is larger than the array lenght', () => {

        // Arrange
        let expectedSum = 3.3;
        let numbers = [1.1, 2.2, 3.3, 4.4, 5.5];
        let startIndex = -3;
        let endIndex = 1;

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert
        expect(actualSum).to.equal(expectedSum);

    });
    it('Should check if the startIndex < 0', () => {

        // Arrange
        let expectedSum = 0;
        let numbers = [];
        let startIndex = 1;
        let endIndex = 2;

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert
        expect(actualSum).to.equal(expectedSum);

    });
})