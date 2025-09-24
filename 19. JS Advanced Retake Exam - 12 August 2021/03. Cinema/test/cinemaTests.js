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
});