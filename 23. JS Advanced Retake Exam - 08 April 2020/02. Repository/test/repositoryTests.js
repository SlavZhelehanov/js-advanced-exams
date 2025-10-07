let { Repository } = require("../repository.js");

describe("Repository Tests", function () {
    let properties;
    let repository;

    beforeEach(() => {
        properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        repository = new Repository(properties);
    });

    describe("Instantiation", () => {
        it("should initialize with given props and empty Map", () => {
            expect(repository.props).to.deep.equal(properties);
            expect(repository.data).to.be.instanceOf(Map);
            expect(repository.count).to.equal(0);
        });
    });
});
