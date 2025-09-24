const {expect} = require('chai');
const cinema = require("../cinema");

describe('library tests', () => {
    describe("showMovies()", function () {
        it("should return message if no movies are available", function () {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        });

        it("should return movies joined by comma and space", function () {
            expect(cinema.showMovies(['King Kong', 'Joker'])).to.equal("King Kong, Joker");
        });

        it("should return single movie if only one exists", function () {
            expect(cinema.showMovies(['Avatar'])).to.equal("Avatar");
        });
    });

    describe("ticketPrice()", function () {
        it("should return correct price for Premiere", function () {
            expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
        });

        it("should return correct price for Normal", function () {
            expect(cinema.ticketPrice("Normal")).to.equal(7.50);
        });

        it("should return correct price for Discount", function () {
            expect(cinema.ticketPrice("Discount")).to.equal(5.50);
        });

        it("should throw error for invalid projection type", function () {
            expect(() => cinema.ticketPrice("VIP")).to.throw("Invalid projection type.");
        });
    });
});