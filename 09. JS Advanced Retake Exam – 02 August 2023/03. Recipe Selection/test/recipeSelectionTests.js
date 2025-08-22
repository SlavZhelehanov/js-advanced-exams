const {expect} = require('chai');
const recipeSelection = require('../recipeSelection');

describe("Tests for recipeSelection", function () {
    describe("isTypeSuitable()", function () {
        it("should throw an error for invalid input types", function () {
            expect(() => recipeSelection.isTypeSuitable(123, "product")).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable("quantity", 123)).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable(123, 321)).to.throw("Invalid input");
        });

        it("should return a message if the this recipe is not suitable for vegetarians", function () {
            expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal("This recipe is not suitable for vegetarians");
        });

        it("should return a message if the this recipe is not suitable for vegans", function () {
            expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal("This recipe is not suitable for vegans");
            expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal("This recipe is not suitable for vegans");
        });

        it("should return a message if the this recipe is not suitable for your dietary restriction", function () {
            expect(recipeSelection.isTypeSuitable("Fruit", "Everyone")).to.equal("This recipe is suitable for your dietary restriction");
        });
    });

    describe("isItAffordable()", function () {
        it("should throw an error for invalid input types", function () {
            expect(() => recipeSelection.isItAffordable(123, "budget")).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable("price", 123)).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable("price", "budget")).to.throw("Invalid input");
        });

        it("should return a message that you don't have enough budget to afford this recipe", function () {
            expect(recipeSelection.isItAffordable(5, 4)).to.equal("You don't have enough budget to afford this recipe");
        });

        it("should return a message that this recipe is affordable ", function () {
            expect(recipeSelection.isItAffordable(5, 5)).to.equal("Recipe ingredients bought. You have 0$ left");
            expect(recipeSelection.isItAffordable(5, 6)).to.equal("Recipe ingredients bought. You have 1$ left");
        });
    });
});