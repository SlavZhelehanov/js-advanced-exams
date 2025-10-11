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

    describe("buyMovie()", () => {
        it("should add a new movie with unique actors", () => {
            let result = christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Macaulay Culkin']);
            expect(result).to.equal(
                'You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci are taking part!'
            );
            expect(christmas.movieCollection).to.have.lengthOf(1);
            expect(christmas.movieCollection[0].actors).to.deep.equal(['Macaulay Culkin', 'Joe Pesci']);
        });

        it("should throw if movie already exists", () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
            expect(() => christmas.buyMovie('Home Alone', ['Another Actor']))
                .to.throw('You already own Home Alone in your collection!');
        });
    });

    describe("watchMovie()", () => {
        it("should throw if movie is not in collection", () => {
            expect(() => christmas.watchMovie('Nonexistent')).to.throw('No such movie in your collection!');
        });

        it("should add movie to watched list if first time watching", () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
            christmas.watchMovie('Home Alone');
            expect(christmas.watched).to.have.property('Home Alone', 1);
        });

        it("should increment watch count if already watched", () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            expect(christmas.watched['Home Alone']).to.equal(2);
        });
    });
});