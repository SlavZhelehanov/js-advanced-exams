const {expect} = require('chai');
const findNewApartment = require("../findApartment");

describe("Tests for findNewApartment", function () {
    describe("isGoodLocation()", function () {
        it("should throw an error for invalid input types", function () {
            expect(() => findNewApartment.isGoodLocation(123, 123)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(123, "nearPublicTransportation")).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(123, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(true, 123)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(true, "nearPublicTransportation")).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(true, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Varna", 123)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Varna", "nearPublicTransportation")).to.throw("Invalid input!");
        });
        it("should return a message if the value of the string location is different from 'Sofia', 'Plovid' or 'Varna'", function () {
            expect(findNewApartment.isGoodLocation("city", false)).to.equal("This location is not suitable for you.");
        });
        it("should return a message if the value of the boolean nearPublicTransportation is false", function () {
            expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
        });
        it("should return a message when met right conditions", function () {
            expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        });
    });

    describe("isLargeEnough()", function () {
        it("should throw an error for invalid input types", function () {
            expect(() => findNewApartment.isLargeEnough(123, 123)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(true, 123)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough("apartments", 123)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 123)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], [40, 50, 60])).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], "minimalSquareMeters")).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], true)).to.throw("Invalid input!");
        });
        it('should return apartments equal or larger than minimalSquareMeters', () => {
            const result = findNewApartment.isLargeEnough([40, 50, 60], 50);
            expect(result).to.equal('50, 60');
        });
        it('should return all apartments if all are larger than minimalSquareMeters', () => {
            const result = findNewApartment.isLargeEnough([70, 80, 90], 60);
            expect(result).to.equal('70, 80, 90');
        });
        it('should return an empty string if no apartments meet the criteria', () => {
            const result = findNewApartment.isLargeEnough([30, 35, 40], 50);
            expect(result).to.equal('');
        });
        it('should include apartments equal to minimalSquareMeters', () => {
            const result = findNewApartment.isLargeEnough([45, 50, 55], 50);
            expect(result).to.equal('50, 55');
        });
    });

    describe("isItAffordable()", function () {
        it("should throw an error for invalid input types", function () {
            expect(() => findNewApartment.isItAffordable("price", "budget")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable("price", 123)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable("price", [40, 50, 60])).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable("price", true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(123, "budget")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(123, [40, 50, 60])).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(123, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-1, 0)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-1, -1)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(0, -1)).to.throw("Invalid input!");
        });
        it('should return the apartment is not affordable', () => {
            const result = findNewApartment.isItAffordable(60, 50);
            expect(result).to.equal("You don't have enough money for this house!");
        });
        it('should return the apartment is affordable', () => {
            const result1 = findNewApartment.isItAffordable(60, 60);
            const result2 = findNewApartment.isItAffordable(60, 70);
            expect(result1).to.equal("You can afford this home!");
            expect(result2).to.equal("You can afford this home!");
        });
    });
});