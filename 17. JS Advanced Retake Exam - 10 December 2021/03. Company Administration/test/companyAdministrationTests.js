const {expect} = require('chai');
const companyAdministration = require("../companyAdministration.js");

describe('companyAdministration tests', () => {
    describe("hiringEmployee", function () {
        it("should hire when position is Programmer and experience >= 3", function () {
            expect(companyAdministration.hiringEmployee("Alice", "Programmer", 3))
                .to.equal("Alice was successfully hired for the position Programmer.");
            expect(companyAdministration.hiringEmployee("Bob", "Programmer", 5))
                .to.equal("Bob was successfully hired for the position Programmer.");
        });

        it("should not approve when position is Programmer and experience < 3", function () {
            expect(companyAdministration.hiringEmployee("Charlie", "Programmer", 1))
                .to.equal("Charlie is not approved for this position.");
        });

        it("should throw an error for any other position", function () {
            expect(() => companyAdministration.hiringEmployee("Daisy", "Designer", 4))
                .to.throw("We are not looking for workers for this position.");
        });
    });
});