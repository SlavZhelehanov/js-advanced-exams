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

    describe("moneySpent()", function () {
        it("should throw an error for invalid inputs", function () {
            expect(() => movieTheater.moneySpent (5, 5, 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (5, 5, "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (5, 5, ["5"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (5, "5", 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (5, "5", "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (5, "5", ["5"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (5, ["5"], 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (5, ["5"], "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", 5, 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", 5, "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", 5, ["5"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", "5", 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", "5", "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", "5", ["5"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", ["5"], 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", ["5"], "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent ("5", ["5"], ["5"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], 5, 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], 5, "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], 5, ["5"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], "5", 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], "5", "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], "5", ["5"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], ["5"], 5)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], ["5"], "5")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent (["5"], ["5"], ["5"])).to.throw("Invalid input");
        });
        it("should apply 20% discount for total cost bigger than 50 levs", () => {
            expect(movieTheater.moneySpent (4, [], [])).to.equal("The total cost for the purchase with applied discount is 48.00");
            expect(movieTheater.moneySpent (1, ["Nachos", "Nachos", "Nachos", "Nachos", "Nachos", "Nachos", "Popcorn"], [])).to.equal("The total cost for the purchase with applied discount is 44.40");
            expect(movieTheater.moneySpent (3, [], ["Soda", "Soda", "Water"])).to.equal("The total cost for the purchase with applied discount is 41.20");
            expect(movieTheater.moneySpent (3, ["Nachos"], ["Soda"])).to.equal("The total cost for the purchase with applied discount is 42.80");
        });
        it("should return total cost for all purchases less or equal to 50 levs", () => {
            expect(movieTheater.moneySpent (3, [], [])).to.equal("The total cost for the purchase is 45.00");
            expect(movieTheater.moneySpent (2, ["Nachos", "Popcorn"], [])).to.equal("The total cost for the purchase is 40.50");
            expect(movieTheater.moneySpent (2, [], ["Soda", "Water"])).to.equal("The total cost for the purchase is 34.00");
            expect(movieTheater.moneySpent (2, ["Popcorn"], ["Soda"])).to.equal("The total cost for the purchase is 37.00");
        });
    });
});