const { expect } = require("chai");
const petAdoptionAgency = require("./petAdoptionAgency");

describe("Pet Adoption Agency", function () {
    describe("isPetAvailable()", function () {
        it("should throw error for invalid input types", function () {
            expect(() => petAdoptionAgency.isPetAvailable(123, 2, true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("Dog", "2", true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable("Dog", 2, "yes")).to.throw("Invalid input");
        });

        it("should return no pets available message when availableCount <= 0", function () {
            expect(petAdoptionAgency.isPetAvailable("Dog", 0, true))
                .to.equal("Sorry, there are no Dog(s) available for adoption at the agency.");
        });

        it("should return vaccinated pets available message", function () {
            expect(petAdoptionAgency.isPetAvailable("Cat", 3, true))
                .to.equal("Great! We have 3 vaccinated Cat(s) available for adoption at the agency.");
        });

        it("should return pets available but need vaccination message", function () {
            expect(petAdoptionAgency.isPetAvailable("Rabbit", 2, false))
                .to.equal("Great! We have 2 Rabbit(s) available for adoption, but they need vaccination.");
        });
    });
});
