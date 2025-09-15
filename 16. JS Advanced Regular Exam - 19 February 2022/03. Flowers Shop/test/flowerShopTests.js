const {expect} = require('chai');
const flowerShop = require("../flowerShop");

describe('flowerShop Tests', function () {
    describe('calcPriceOfFlowers', () => {
        it('should throw error for invalid flower type', () => {
            expect(() => flowerShop.calcPriceOfFlowers(123, 5, 2)).to.throw('Invalid input!');
        });

        it('should throw error for non-integer price', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', '5', 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5.5, 2)).to.throw('Invalid input!');
        });

        it('should throw error for non-integer quantity', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5, '2')).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5, 2.5)).to.throw('Invalid input!');
        });

        it('should return correct total price rounded to 2 decimals', () => {
            const result = flowerShop.calcPriceOfFlowers('Rose', 3, 4);
            expect(result).to.equal('You need $12.00 to buy Rose!');
        });
    });
});