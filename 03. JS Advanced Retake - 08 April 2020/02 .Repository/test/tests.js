const {expect} = require('chai');
let { Repository } = require("../solution.js");

describe("Tests …", function () {
    let properties;
    let repository;
    let entity;

    beforeEach(() => {
        properties = {
            name: 'string',
            age: 'number',
            birthday: 'object'
        };
        repository = new Repository(properties);
        entity = {
            name: 'Pesho',
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
    });

    describe('Initialization', () => {
        it('should initialize with given props', () => {
            expect(repository.props).to.deep.equal(properties);
        });

        it('should have data as a Map', () => {
            expect(repository.data).to.be.instanceOf(Map);
        });

        it('should start with count 0', () => {
            expect(repository.count).to.equal(0);
        });
    });

    describe('add()', () => {
        it('should add entity and return correct id', () => {
            const id = repository.add(entity);
            expect(id).to.equal(0);
            expect(repository.count).to.equal(1);
            expect(repository.data.get(id)).to.deep.equal(entity);
        });

        it('should throw if property is missing', () => {
            let badEntity = { name: 'Gosho', age: 22 };
            expect(() => repository.add(badEntity)).to.throw(Error, 'Property birthday is missing from the entity!');
        });

        it('should throw if property type is incorrect', () => {
            let badEntity = { name: 'Pesho', age: 'ab22c', birthday: new Date() };
            expect(() => repository.add(badEntity)).to.throw(TypeError, 'Property age is not of correct type!');
        });
    });

    describe('getId()', () => {
        it('should return the correct entity by id', () => {
            const id = repository.add(entity);
            const result = repository.getId(id);
            expect(result).to.deep.equal(entity);
        });

        it('should throw if id does not exist', () => {
            expect(() => repository.getId(99)).to.throw(Error, 'Entity with id: 99 does not exist!');
        });
    });

    describe('update()', () => {
        it('should update an existing entity', () => {
            const id = repository.add(entity);
            const newEntity = { name: 'Gosho', age: 30, birthday: new Date(1995, 5, 15) };
            repository.update(id, newEntity);
            expect(repository.getId(id)).to.deep.equal(newEntity);
        });

        it('should throw if id does not exist', () => {
            expect(() => repository.update(42, entity)).to.throw(Error, 'Entity with id: 42 does not exist!');
        });

        it('should validate updated entity', () => {
            const id = repository.add(entity);
            const badEntity1 = { name: 'Pesho', age: 'wrong', birthday: new Date() };
            const badEntity2 = { name: 'Pesho', age: 22 };
            expect(() => repository.update(id, badEntity1)).to.throw(TypeError, 'Property age is not of correct type!');
            expect(() => repository.update(id, badEntity2)).to.throw(Error, 'Property birthday is missing from the entity!');
        });
    });

    describe('del()', () => {
        it('should delete entity by id', () => {
            const id = repository.add(entity);
            repository.del(id);
            expect(repository.count).to.equal(0);
        });

        it('should throw if id does not exist', () => {
            expect(() => repository.del(123)).to.throw(Error, 'Entity with id: 123 does not exist!');
        });
    });

    describe('count getter', () => {
        it('should return correct count after operations', () => {
            repository.add(entity);
            repository.add(entity);
            expect(repository.count).to.equal(2);
            repository.del(0);
            expect(repository.count).to.equal(1);
        });
    });
});