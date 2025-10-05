const {expect} = require("chai");
const dealership = require("../dealership.js");

describe("Tests for dealership", function() {
    describe("newCarCost()", function() {
        it("should return new car price without discount", function() {
            expect(dealership.newCarCost('FIAT Chinquechiento 90S', 800)).to.equal(800);
        });
        it("should return new car price with discount", function() {
            expect(dealership.newCarCost('Audi A4 B8', 50000)).to.equal(35000);
            expect(dealership.newCarCost('Audi A6 4K', 50000)).to.equal(30000);
            expect(dealership.newCarCost('Audi A8 D5', 50000)).to.equal(25000);
            expect(dealership.newCarCost('Audi TT 8J', 50000)).to.equal(36000);
        });
    });

    describe("carEquipment()", function() {
        it("should return no extras", function() {
            expect(dealership.carEquipment([], [])).to.deep.equal([]);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [])).to.deep.equal([]);
        });
        it("should return extras to the car", function() {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0])).to.deep.equal(['heated seats']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [3])).to.deep.equal(['navigation']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1, 2])).to.deep.equal(['sliding roof', 'sport rims']);
        });
    });
});
