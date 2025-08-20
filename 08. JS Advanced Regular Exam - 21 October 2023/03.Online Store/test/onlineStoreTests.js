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

    describe("canAffordProduct()", function() {
        it("should throw an error for invalid input types", function() {
            expect(() => onlineStore.canAffordProduct(123, "balance")).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct("price", "balance")).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct("price", 321)).to.throw("Invalid input.");
        });

        it("should return a message if the user doesn't have enough funds", function() {
            expect(onlineStore.canAffordProduct(2, 1)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it("should return a message if the purchase is successful", function() {
            expect(onlineStore.canAffordProduct(3, 3)).to.equal("Product purchased. Your remaining balance is $0.");
            expect(onlineStore.canAffordProduct(2, 3)).to.equal("Product purchased. Your remaining balance is $1.");
        });
    });
});