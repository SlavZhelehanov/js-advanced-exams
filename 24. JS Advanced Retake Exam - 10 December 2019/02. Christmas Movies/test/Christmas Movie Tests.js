const { expect } = require('chai');
const ChristmasMovies = require('../resources'); // adjust path if needed

describe("ChristmasMovies Class Tests", function () {
    let christmas;

    beforeEach(() => {
        christmas = new ChristmasMovies();
    });

    describe("Instantiation", () => {
        it("should initialize with correct default properties", () => {
            expect(christmas.movieCollection).to.be.an('array').that.is.empty;
            expect(christmas.watched).to.be.an('object').that.is.empty;
            expect(christmas.actors).to.be.an('array').that.is.empty;
        });
    });
});