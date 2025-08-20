const {expect} = require('chai');
const onlineStore = require('../onlineStore');

describe("Tests …", function() {
    describe("isProductAvailable()", function() {
        it("should throw an error for invalid input types", function() {
            expect(() => onlineStore.isProductAvailable(123, "product")).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable("quantity", "product")).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(123, 321)).to.throw("Invalid input.");
        });

        it("should return a message if the stockQuantity <= 0, and product is considered out of stock", function() {
            expect(onlineStore.isProductAvailable("bag pack", 0)).to.equal("Sorry, bag pack is currently out of stock.");
            expect(onlineStore.isProductAvailable("bag pack", -3)).to.equal("Sorry, bag pack is currently out of stock.");
        });

        it("should return a message if the 0 < stockQuantity, and product is available", function() {
            expect(onlineStore.isProductAvailable("bag pack", 3)).to.equal("Great! bag pack is available for purchase.");
        });
    });
});