const {expect} = require('chai');
const weddingDay = require('../weddingDay');

describe("Tests for weddingDay", function () {
    describe("pickVenue()", function () {
        it("should throw an error for invalid input types", function () {
            expect(() => weddingDay.pickVenue(123, "pricePerGuest", "location")).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue("capacity", 123, "location")).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue("capacity", "pricePerGuest", "location")).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(123, 123, 123)).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(123, 123, "")).to.throw("Invalid Information!");
        });

        it("should throw an error if the value of the string location is different from 'Varna'", function () {
            expect(() => weddingDay.pickVenue(123, 123, "location")).to.throw("The location of this venue is not in the correct area!");
        });

        it("should return a message if the venue does not meet the requirements", function () {
            expect(weddingDay.pickVenue(150, 130, "Varna")).to.equal("This venue does not meet your requirements!");
            expect(weddingDay.pickVenue(140, 120, "Varna")).to.equal("This venue does not meet your requirements!");
            expect(weddingDay.pickVenue(140, 110, "Varna")).to.equal("This venue does not meet your requirements!");
            expect(weddingDay.pickVenue(160, 130, "Varna")).to.equal("This venue does not meet your requirements!");
        });

        it("should return a message if the venue meets the requirements", function () {
            expect(weddingDay.pickVenue(150, 120, "Varna")).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
            expect(weddingDay.pickVenue(150, 110, "Varna")).to.equal("This venue meets the requirements, with capacity of 150 guests and 110$ cover.");
            expect(weddingDay.pickVenue(160, 120, "Varna")).to.equal("This venue meets the requirements, with capacity of 160 guests and 120$ cover.");
            expect(weddingDay.pickVenue(160, 110, "Varna")).to.equal("This venue meets the requirements, with capacity of 160 guests and 110$ cover.");
        });
    });

    describe("otherSpendings()", function () {
        it('should calculate total without discount for valid inputs', () => {
            const result = weddingDay.otherSpendings(['flowers'], ['pictures'], false);
            expect(result).to.equal('You spend 1200$ for wedding decoration and photography!');
        });

        it('should calculate total with discount for valid inputs', () => {
            const result = weddingDay.otherSpendings(['flowers'], ['pictures'], true);
            expect(result).to.equal('You spend 1020$ for wedding decoration and photography with 15% discount!');
        });

        it('should handle multiple items and apply discount correctly', () => {
            const result = weddingDay.otherSpendings(
                ['flowers', 'Fabric drapes and curtains'],
                ['pictures', 'video'],
                true
            );
            expect(result).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!');
        });

        it('should throw error if weddingDecoration is not an array', () => {
            expect(() => weddingDay.otherSpendings('flowers', ['pictures'], false))
                .to.throw('Invalid Information!');
        });

        it('should throw error if photography is not an array', () => {
            expect(() => weddingDay.otherSpendings(['flowers'], 'pictures', false))
                .to.throw('Invalid Information!');
        });

        it('should throw error if discount is not a boolean', () => {
            expect(() => weddingDay.otherSpendings(['flowers'], ['pictures'], 'true'))
                .to.throw('Invalid Information!');
        });

        it('should work with only one category filled', () => {
            const result = weddingDay.otherSpendings([], ['video'], false);
            expect(result).to.equal('You spend 1300$ for wedding decoration and photography!');
        });
    });

    describe("tableDistribution()", function () {
        it('should return join tables message when people per table < 6', () => {
            const result = weddingDay.tableDistribution(10, 3);
            expect(result).to.equal('There is only 3 people on every table, you can join some tables.');
        });

        it('should return correct message when people per table = 6', () => {
            const result = weddingDay.tableDistribution(60, 10);
            expect(result).to.equal('You have 10 tables with 6 guests on table.');
        });

        it('should return correct message when people per table > 6', () => {
            const result = weddingDay.tableDistribution(25, 4);
            expect(result).to.equal('You have 4 tables with 6 guests on table.');
        });

        it('should round up when decimal >= .5', () => {
            const result = weddingDay.tableDistribution(20, 3);
            expect(result).to.equal('You have 3 tables with 7 guests on table.');
        });

        it('should throw error if guests is not a number', () => {
            expect(() => weddingDay.tableDistribution('20', 4))
                .to.throw('Invalid Information!');
        });

        it('should throw error if tables is not a number', () => {
            expect(() => weddingDay.tableDistribution(20, '4'))
                .to.throw('Invalid Information!');
        });

        it('should throw error if guests is zero', () => {
            expect(() => weddingDay.tableDistribution(0, 4))
                .to.throw('Invalid Information!');
        });

        it('should throw error if tables is zero', () => {
            expect(() => weddingDay.tableDistribution(20, 0))
                .to.throw('Invalid Information!');
        });

        it('should throw error if guests is negative', () => {
            expect(() => weddingDay.tableDistribution(-5, 4))
                .to.throw('Invalid Information!');
        });

        it('should throw error if tables is negative', () => {
            expect(() => weddingDay.tableDistribution(20, -2))
                .to.throw('Invalid Information!');
        });
    });
});