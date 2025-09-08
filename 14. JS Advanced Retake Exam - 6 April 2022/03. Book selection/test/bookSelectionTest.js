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

    // describe("isItAffordable()", function () {
    //
    // });
    //
    // describe("suitableTitles()", function () {
    //
    // });
});