const {expect} = require("chai");
const dealership = require("../dealership.js");

describe("Tests for dealership", function() {
    describe("tnewCarCost()", function() {
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
});
