const {expect} = require('chai');
const library = require("../library");

describe('library tests', () => {
    describe("calcPriceOfBook()", function () {
        it("should throw error if nameOfBook is not a string", function () {
            expect(() => library.calcPriceOfBook(123, 2000)).to.throw("Invalid input");
        });

        it("should throw error if year is not an integer", function () {
            expect(() => library.calcPriceOfBook("Book", "2000")).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook("Book", 2000.5)).to.throw("Invalid input");
        });

        it("should apply 50% discount if year <= 1980", function () {
            expect(library.calcPriceOfBook("OldBook", 1980)).to.equal("Price of OldBook is 10.00");
            expect(library.calcPriceOfBook("AncientBook", 1970)).to.equal("Price of AncientBook is 10.00");
        });

        it("should return standard price if year > 1980", function () {
            expect(library.calcPriceOfBook("ModernBook", 2000)).to.equal("Price of ModernBook is 20.00");
        });
    });
});