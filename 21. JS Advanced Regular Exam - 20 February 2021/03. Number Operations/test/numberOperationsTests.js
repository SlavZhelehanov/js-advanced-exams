const {expect} = require('chai');
const numberOperations = require("../numberOperations.js");

describe('Tests for numberOperations', function() {
    describe('powNumber', function() {
        it('should return square of a positive number', function() {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(5)).to.equal(25);
        });

        it('should return square of a negative number', function() {
            expect(numberOperations.powNumber(-3)).to.equal(9);
        });

        it('should return 0 for input 0', function() {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
    });

    describe('numberChecker', function() {
        it('should throw error when input is not a number', function() {
            expect(() => numberOperations.numberChecker('abc')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
        });

        it('should return message when number is lower than 100', function() {
            expect(numberOperations.numberChecker(50)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
        });

        it('should return message when number is greater or equal to 100', function() {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(150)).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', function() {
        it('should sum arrays of equal length', function() {
            expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6])).to.deep.equal([5, 7, 9]);
        });

        it('should handle when first array is longer', function() {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [5, 6])).to.deep.equal([6, 8, 3, 4]);
        });

        it('should handle when second array is longer', function() {
            expect(numberOperations.sumArrays([1, 2], [3, 4, 5, 6])).to.deep.equal([4, 6, 5, 6]);
        });

        it('should return empty array when both arrays are empty', function() {
            expect(numberOperations.sumArrays([], [])).to.deep.equal([]);
        });
    });
});