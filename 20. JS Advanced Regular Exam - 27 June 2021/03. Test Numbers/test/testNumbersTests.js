const {expect} = require('chai');
const testNumbers = require("../testNumbers");

describe("Tests for testNumbers", () => {
    describe("sumNumbers", function() {
        it("should return undefined if first parameter is not a number", function() {
            expect(testNumbers.sumNumbers('a', 5)).to.be.undefined;
        });

        it("should return undefined if second parameter is not a number", function() {
            expect(testNumbers.sumNumbers(5, 'b')).to.be.undefined;
        });

        it("should return correct sum rounded to 2 decimals for valid numbers", function() {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1.234, 2.456)).to.equal('3.69');
        });

        it("should work with negative numbers", function() {
            expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
        });
    });

    describe("numberChecker", function() {
        it("should throw error if input is not a number", function() {
            expect(() => testNumbers.numberChecker('abc')).to.throw('The input is not a number!');
        });

        it("should return even message for even number", function() {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

        it("should return odd message for odd number", function() {
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
        });

        it("should parse string number input", function() {
            expect(testNumbers.numberChecker('4')).to.equal('The number is even!');
        });
    });
});