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

    describe("isLargeEnough()", function () {
        it("should throw an error for invalid input types", function () {
            expect(() => isLargeEnough(123, 123)).to.throw("Invalid input!");
            expect(() => isLargeEnough(true, 123)).to.throw("Invalid input!");
            expect(() => isLargeEnough("apartments", 123)).to.throw("Invalid input!");
            expect(() => isLargeEnough([], 123)).to.throw("Invalid input!");
            expect(() => isLargeEnough([40, 50, 60], [40, 50, 60])).to.throw("Invalid input!");
            expect(() => isLargeEnough([40, 50, 60], "minimalSquareMeters")).to.throw("Invalid input!");
            expect(() => isLargeEnough([40, 50, 60], true)).to.throw("Invalid input!");
        });
        it('should return apartments equal or larger than minimalSquareMeters', () => {
            const result = isLargeEnough([40, 50, 60], 50);
            expect(result).to.equal('50, 60');
        });
        it('should return all apartments if all are larger than minimalSquareMeters', () => {
            const result = isLargeEnough([70, 80, 90], 60);
            expect(result).to.equal('70, 80, 90');
        });
        it('should return an empty string if no apartments meet the criteria', () => {
            const result = isLargeEnough([30, 35, 40], 50);
            expect(result).to.equal('');
        });
        it('should include apartments equal to minimalSquareMeters', () => {
            const result = isLargeEnough([45, 50, 55], 50);
            expect(result).to.equal('50, 55');
        });
    });
});