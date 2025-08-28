const {expect} = require('chai');
const {isGoodLocation, isLargeEnough, isItAffordable} = require("../findApartment");

describe("Tests for findNewApartment", function () {
    describe("isGoodLocation()", function () {
        it("should throw an error for invalid input types", function () {
            expect(() => isGoodLocation(123, 123)).to.throw("Invalid input!");
            expect(() => isGoodLocation(123, "nearPublicTransportation")).to.throw("Invalid input!");
            expect(() => isGoodLocation(123, true)).to.throw("Invalid input!");
            expect(() => isGoodLocation(true, 123)).to.throw("Invalid input!");
            expect(() => isGoodLocation(true, "nearPublicTransportation")).to.throw("Invalid input!");
            expect(() => isGoodLocation(true, true)).to.throw("Invalid input!");
            expect(() => isGoodLocation("Varna", 123)).to.throw("Invalid input!");
            expect(() => isGoodLocation("Varna", "nearPublicTransportation")).to.throw("Invalid input!");
        });
        it("should return a message if the value of the string location is different from 'Sofia', 'Plovid' or 'Varna'", function () {
            expect(isGoodLocation("city", false)).to.equal("This location is not suitable for you.");
        });
        it("should return a message if the value of the boolean nearPublicTransportation is false", function () {
            expect(isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
        });
        it("should return a message when met right conditions", function () {
            expect(isGoodLocation("Varna", true)).to.equal("You can go on home tour!");
            expect(isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!");
            expect(isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        });
    });
});