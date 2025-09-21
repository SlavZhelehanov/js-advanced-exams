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

    describe("findBook()", function () {
        it("should throw error if booksArr is empty", function () {
            expect(() => library.findBook([], "Troy")).to.throw("No books currently available");
        });

        it("should return success message if desiredBook is found", function () {
            expect(library.findBook(["Troy", "Life Style"], "Troy")).to.equal("We found the book you want.");
        });

        it("should return not found message if desiredBook is missing", function () {
            expect(library.findBook(["Troy", "Life Style"], "Unknown")).to.equal("The book you are looking for is not here!");
        });
    });

    describe("arrangeTheBooks()", function () {
        it("should throw error if countBooks is not an integer", function () {
            expect(() => library.arrangeTheBooks("10")).to.throw("Invalid input");
            expect(() => library.arrangeTheBooks(5.5)).to.throw("Invalid input");
        });

        it("should throw error if countBooks is negative", function () {
            expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
        });

        it("should return success message if books fit on shelves", function () {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
        });

        it("should return insufficient space if books exceed shelf capacity", function () {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
});