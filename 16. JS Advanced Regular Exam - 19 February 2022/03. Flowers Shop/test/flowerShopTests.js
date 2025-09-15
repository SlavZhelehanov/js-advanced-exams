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

    describe('checkFlowersAvailable', () => {
        it('should confirm if flower exists in gardenArr', () => {
            const result = flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid']);
            expect(result).to.equal('The Rose are available!');
        });

        it('should state when flower is not available', () => {
            const result = flowerShop.checkFlowersAvailable('Daisy', ['Rose', 'Lily', 'Orchid']);
            expect(result).to.equal('The Daisy are sold! You need to purchase more!');
        });
    });

    describe('sellFlowers', () => {
        it('should throw error if gardenArr is not an array', () => {
            expect(() => flowerShop.sellFlowers('Rose', 1)).to.throw('Invalid input!');
        });

        it('should throw error if space is not an integer', () => {
            expect(() => flowerShop.sellFlowers(['Rose','Lily'], '1')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['Rose','Lily'], 1.5)).to.throw('Invalid input!');
        });

        it('should throw error if space is out of range', () => {
            expect(() => flowerShop.sellFlowers(['Rose','Lily'], -1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['Rose','Lily'], 5)).to.throw('Invalid input!');
        });

        it('should remove the correct flower and return joined string', () => {
            const result = flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1);
            expect(result).to.equal('Rose / Orchid');
        });
    });
});