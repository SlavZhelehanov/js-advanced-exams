const { expect } = require("chai");

describe("artGallery Tests", function () {
    describe("addArtwork()", function () {
        it("should add artwork successfully with valid inputs", function () {
            const result = artGallery.addArtwork("Starry Night", "30 x 40", "Van Gogh");
            expect(result).to.equal("Artwork added successfully: 'Starry Night' by Van Gogh with dimensions 30 x 40.");
        });

        it("should throw error if title is not a string", function () {
            expect(() => artGallery.addArtwork(123, "30 x 40", "Van Gogh")).to.throw("Invalid Information!");
        });

        it("should throw error if artist is not a string", function () {
            expect(() => artGallery.addArtwork("Starry Night", "30 x 40", 123)).to.throw("Invalid Information!");
        });

        it("should throw error for invalid dimensions format", function () {
            expect(() => artGallery.addArtwork("Starry Night", "30x40", "Van Gogh")).to.throw("Invalid Dimensions!");
        });

        it("should throw error for disallowed artist", function () {
            expect(() => artGallery.addArtwork("Mona Lisa", "30 x 40", "Da Vinci")).to.throw("This artist is not allowed in the gallery!");
        });
    });
});
