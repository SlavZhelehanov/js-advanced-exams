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
});