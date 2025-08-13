const { expect } = require('chai');

// Assuming streamingServiceSelector is imported from your implementation file
const streamingServiceSelector = require('./streamingServiceSelector');

describe("streamingServiceSelector Tests", function () {
    describe("selectingContent()", function () {
        it("should throw error if genre is not supported", function () {
            expect(() => streamingServiceSelector.selectingContent("Movie", "Netflix", "Fantasy"))
                .to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
        });

        it("should throw error if type is invalid", function () {
            expect(() => streamingServiceSelector.selectingContent("Documentary", "Netflix", "Action"))
                .to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });

        it("should return correct message for valid inputs", function () {
            const result = streamingServiceSelector.selectingContent("Movie", "Netflix", "Action");
            expect(result).to.equal("You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!");
        });
    });

    describe("availablePlatforms()", function () {
        it("should throw error if platforms is not an array", function () {
            expect(() => streamingServiceSelector.availablePlatforms("Netflix", 0))
                .to.throw("Invalid platform selection.");
        });

        it("should throw error if index is not integer", function () {
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO"], "0"))
                .to.throw("Invalid platform selection.");
        });

        it("should throw error if index is out of bounds", function () {
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO"], 5))
                .to.throw("Invalid platform selection.");
        });

        it("should return correct remaining platforms", function () {
            const result = streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 1);
            expect(result).to.equal("Other available platforms are: Netflix, Disney+.");
        });
    });
});