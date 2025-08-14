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

    describe("calculateCosts()", function () {
        it("should calculate total cost without sponsor", function () {
            const result = artGallery.calculateCosts(1000, 500, false);
            expect(result).to.equal("Exhibition and insurance costs are 1500$.");
        });

        it("should calculate total cost with sponsor discount", function () {
            const result = artGallery.calculateCosts(1000, 500, true);
            expect(result).to.equal("Exhibition and insurance costs are 1350$, reduced by 10% with the help of a donation from your sponsor.");
        });

        it("should throw error if exhibitionCosts is not a number", function () {
            expect(() => artGallery.calculateCosts("1000", 500, false)).to.throw("Invalid Information!");
        });

        it("should throw error if insuranceCosts is negative", function () {
            expect(() => artGallery.calculateCosts(1000, -100, false)).to.throw("Invalid Information!");
        });

        it("should throw error if sponsor is not boolean", function () {
            expect(() => artGallery.calculateCosts(1000, 500, "yes")).to.throw("Invalid Information!");
        });
    });

    describe("organizeExhibits()", function () {
        it("should return correct message when artworks per space >= 5", function () {
            const result = artGallery.organizeExhibits(50, 10);
            expect(result).to.equal("You have 10 display spaces with 5 artworks in each space.");
        });

        it("should return correct message when artworks per space < 5", function () {
            const result = artGallery.organizeExhibits(20, 10);
            expect(result).to.equal("There are only 2 artworks in each display space, you can add more artworks.");
        });

        it("should throw error if artworksCount is not a number", function () {
            expect(() => artGallery.organizeExhibits("20", 10)).to.throw("Invalid Information!");
        });

        it("should throw error if displaySpacesCount is <= 0", function () {
            expect(() => artGallery.organizeExhibits(20, 0)).to.throw("Invalid Information!");
        });
    });
});
