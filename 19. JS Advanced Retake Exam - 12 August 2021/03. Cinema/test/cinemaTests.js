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
            expect(() => cinema.ticketPrice("")).to.throw("Invalid projection type.");
            expect(() => cinema.ticketPrice(5)).to.throw("Invalid projection type.");
            expect(() => cinema.ticketPrice()).to.throw("Invalid projection type.");
            expect(() => cinema.ticketPrice([])).to.throw("Invalid projection type.");
        });
    });

    describe("swapSeatsInHall()", function () {
        it("should return unsuccessful if is missing input", function () {
            expect(cinema.swapSeatsInHall(10)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('',10)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10, '')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(null, 10)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10, null)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall()).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful if firstPlace is not integer", function () {
            expect(cinema.swapSeatsInHall(1.5, 10)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall("a", 10)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful if secondPlace is not integer", function () {
            expect(cinema.swapSeatsInHall(10, 1.5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10, "a")).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful if firstPlace is greater than 20", function () {
            expect(cinema.swapSeatsInHall(21, 5)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful if secondPlace is greater than 20", function () {
            expect(cinema.swapSeatsInHall(5, 21)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful if firstPlace is less or equal to 0", function () {
            expect(cinema.swapSeatsInHall(0, 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-5, 5)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful if secondPlace is less or equal to 0", function () {
            expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, -5)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful if seats are equal", function () {
            expect(cinema.swapSeatsInHall(5, 5)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return successful if seats are valid", function () {
            expect(cinema.swapSeatsInHall(1, 10)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10, 1)).to.equal("Successful change of seats in the hall.");
        });
    });
});