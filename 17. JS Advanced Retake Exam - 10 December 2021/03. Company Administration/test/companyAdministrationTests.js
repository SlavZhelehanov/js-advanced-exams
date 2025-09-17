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

    describe("calculateSalary", function () {
        it("should calculate correct salary for valid hours ≤ 160", function () {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });

        it("should add bonus if hours > 160", function () {
            expect(companyAdministration.calculateSalary(170)).to.equal(170 * 15 + 1000);
        });

        it("should throw error for invalid hours (not a number or negative)", function () {
            expect(() => companyAdministration.calculateSalary("100")).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary(-5)).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw("Invalid hours");
        });
    });

    describe("firedEmployee", function () {
        it("should remove the employee at the given index", function () {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1))
                .to.equal("Petar, George");
        });

        it("should work when removing first or last element", function () {
            expect(companyAdministration.firedEmployee(["A", "B", "C"], 0))
                .to.equal("B, C");
            expect(companyAdministration.firedEmployee(["A", "B", "C"], 2))
                .to.equal("A, B");
        });

        it("should throw error for invalid input", function () {
            expect(() => companyAdministration.firedEmployee("not array", 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["A", "B"], "1")).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["A", "B"], -1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["A", "B"], 2)).to.throw("Invalid input");
        });
    });
});