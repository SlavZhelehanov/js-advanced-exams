const {expect} = require('chai');
const chooseYourCar = require("../chooseYourCar");

describe("Tests for chooseYourCar", function () {
    describe("choosingType()", function () {
        it("should throw an error for invalid year", function () {
            expect(() => chooseYourCar.choosingType("type", "color", 1899)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("type", "color", 2023)).to.throw("Invalid Year!");
        });
        it("should throw an error for invalid type car", function () {
            expect(() => chooseYourCar.choosingType("type", "color", 1901)).to.throw("This type of car is not what you are looking for.");
        });
        it("should return a message if the car can be picked", function () {
            expect(chooseYourCar.choosingType("Sedan", "color", 2010)).to.equal("This color Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType("Sedan", "color", 2011)).to.equal("This color Sedan meets the requirements, that you have.");
        });
        it("should return a message if the car can't be picked", function () {
            expect(chooseYourCar.choosingType("Sedan", "color", 2009)).to.equal("This Sedan is too old for you, especially with that color color.");
        });
    });

    describe("brandName()", function () {
        it("should throw error if brands is not an array", () => {
            expect(() => chooseYourCar.brandName("BMW", 0))
                .to.throw("Invalid Information!");
        });

        it("should throw error if brandIndex is not an integer", () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota"], "1"))
                .to.throw("Invalid Information!");
        });

        it("should throw error if brandIndex < 0", () => {
            expect(() => chooseYourCar.brandName(["BMW"], -1))
                .to.throw("Invalid Information!");
        });

        it("should throw error if brandIndex >= brands.length", () => {
            expect(() => chooseYourCar.brandName(["BMW"], 1))
                .to.throw("Invalid Information!");
        });

        it("should remove brand at given index and return string", () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1))
                .to.equal("BMW, Peugeot");
        });

        it("should work with removing first element", () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0))
                .to.equal("Toyota, Peugeot");
        });

        it("should work with removing last element", () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2))
                .to.equal("BMW, Toyota");
        });
    });
});