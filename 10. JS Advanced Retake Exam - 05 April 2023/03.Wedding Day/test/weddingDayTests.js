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
});