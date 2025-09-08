const {expect} = require('chai');
const bookSelection = require("../bookSelection");

describe("Tests for bookSelection", function () {
    describe("isGenreSuitable()", function () {
        it("should return not suitable message for Thriller under or equal to 12", function () {
            expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(
                "Books with Thriller genre are not suitable for kids at 12 age"
            );
            expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal(
                "Books with Thriller genre are not suitable for kids at 10 age"
            );
        });

        it("should return not suitable message for Horror under or equal to 12", function () {
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(
                "Books with Horror genre are not suitable for kids at 12 age"
            );
        });

        it("should return suitable message for Thriller/Horror over 12", function () {
            expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal("Those books are suitable");
            expect(bookSelection.isGenreSuitable("Horror", 20)).to.equal("Those books are suitable");
        });

        it("should return suitable message for other genres regardless of age", function () {
            expect(bookSelection.isGenreSuitable("Comedy", 5)).to.equal("Those books are suitable");
            expect(bookSelection.isGenreSuitable("Romance", 30)).to.equal("Those books are suitable");
        });
    });

    describe("isItAffordable()", function () {
        it("should throw error if price is not a number", function () {
            expect(() => bookSelection.isItAffordable("10", 20)).to.throw("Invalid input");
        });

        it("should throw error if budget is not a number", function () {
            expect(() => bookSelection.isItAffordable(10, "20")).to.throw("Invalid input");
        });

        it("should return not enough money if price > budget", function () {
            expect(bookSelection.isItAffordable(50, 30)).to.equal("You don't have enough money");
        });

        it("should return success message if budget >= price", function () {
            expect(bookSelection.isItAffordable(20, 30)).to.equal("Book bought. You have 10$ left");
            expect(bookSelection.isItAffordable(30, 30)).to.equal("Book bought. You have 0$ left");
        });
    });

    // describe("suitableTitles()", function () {
    //
    // });
});