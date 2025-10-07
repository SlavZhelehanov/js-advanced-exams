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

    describe("count getter", () => {
        it("should return correct number of entities", () => {
            let entity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };
            repository.add(entity);
            expect(repository.count).to.equal(1);
            repository.add(entity);
            expect(repository.count).to.equal(2);
        });
    });

    describe("add()", () => {
        it("should add a valid entity and return its id", () => {
            let entity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };
            let id = repository.add(entity);
            expect(id).to.equal(0);
            expect(repository.getId(0)).to.deep.equal(entity);
        });

        it("should throw error if property is missing", () => {
            let entity = { age: 22, birthday: new Date(1998, 0, 7) };
            expect(() => repository.add(entity)).to.throw(Error, "Property name is missing from the entity!");
        });

        it("should throw type error if property type is wrong", () => {
            let entity = { name: "Pesho", age: "22", birthday: new Date(1998, 0, 7) };
            expect(() => repository.add(entity)).to.throw(TypeError, "Property age is not of correct type!");
        });
    });

    describe("getId()", () => {
        it("should return entity by id", () => {
            let entity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };
            let id = repository.add(entity);
            expect(repository.getId(id)).to.deep.equal(entity);
        });

        it("should throw if id does not exist", () => {
            expect(() => repository.getId(99)).to.throw(Error, "Entity with id: 99 does not exist!");
        });
    });
});
