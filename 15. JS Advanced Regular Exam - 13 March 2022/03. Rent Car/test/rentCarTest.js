const {expect} = require('chai');
const rentCar = require("../rentCar");

describe('rentCar Tests', function () {
    describe('searchCar', function () {
        it('should return correct message if model is found', function () {
            const shop = ["Volkswagen", "BMW", "Audi", "BMW"];
            expect(rentCar.searchCar(shop, "BMW"))
                .to.equal('There is 2 car of model BMW in the catalog!');
        });

        it('should throw error if shop is not an array', function () {
            expect(() => rentCar.searchCar("not-array", "BMW"))
                .to.throw('Invalid input!');
        });

        it('should throw error if model is not string', function () {
            expect(() => rentCar.searchCar(["BMW"], 123))
                .to.throw('Invalid input!');
        });

        it('should throw error if model is not found', function () {
            expect(() => rentCar.searchCar(["BMW"], "Audi"))
                .to.throw('There are no such models in the catalog!');
        });
    });

    describe('calculatePriceOfCar', function () {
        it('should return correct cost for valid model and days', function () {
            expect(rentCar.calculatePriceOfCar('BMW', 2))
                .to.equal('You choose BMW and it will cost $90!');
        });

        it('should throw error if model is not in catalog', function () {
            expect(() => rentCar.calculatePriceOfCar('Honda', 2))
                .to.throw('No such model in the catalog!');
        });

        it('should throw error if model is not string', function () {
            expect(() => rentCar.calculatePriceOfCar(123, 2))
                .to.throw('Invalid input!');
        });

        it('should throw error if days is not an integer', function () {
            expect(() => rentCar.calculatePriceOfCar('BMW', '2'))
                .to.throw('Invalid input!');
        });
    });
});