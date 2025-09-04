const {expect} = require('chai');
const movieTheater = require("../movieTheater");

describe("Tests for movieTheater", function () {
    describe("ageRestrictions()", function () {
        it("should admit all ages", function () {
            expect(movieTheater.ageRestrictions("G")).to.equal("All ages admitted to watch the movie");
        });
        it("should send parental guidance", function () {
            expect(movieTheater.ageRestrictions("PG")).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
        });
        it("should send under 17 accompanying parent need message for the movie", function () {
            expect(movieTheater.ageRestrictions("R")).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
        });
        it("should send under 17 restriction message for the movie", function () {
            expect(movieTheater.ageRestrictions("NC-17")).to.equal("No one under 17 admitted to watch the movie");
        });
        it("should send no age restrictions", function () {
            expect(movieTheater.ageRestrictions("")).to.equal("There are no age restrictions for this movie");
            expect(movieTheater.ageRestrictions("+18")).to.equal("There are no age restrictions for this movie");
        });
    });
});