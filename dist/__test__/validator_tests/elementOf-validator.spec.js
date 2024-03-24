"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementOf_validator_1 = require("../../validators/elementOf-validator");
describe("ElementOfValidator Test", () => {
    it("should return false and have default error message", () => {
        const testValue = [1, 2, 3];
        const validator = (0, elementOf_validator_1.elementOf)(testValue);
        const defaultValidatorErrorMessage = `The value ':value' is not the element of [${testValue.join(", ")}].`;
        const inputValue = 4;
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(defaultValidatorErrorMessage);
        var isValid = validator.validate(inputValue);
        expect(isValid).toEqual(false);
    });
});
describe("ElementOfValidator Test", () => {
    it("should return false and have custom error message", () => {
        const testValue = [1, 2, 3];
        const customerErrorMessage = `Wrong guess.`;
        const validator = (0, elementOf_validator_1.elementOf)(testValue, customerErrorMessage);
        const inputValue = 4;
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(customerErrorMessage);
        var isValid = validator.validate(inputValue);
        expect(isValid).toEqual(false);
    });
});
describe("ElementOfValidator Test", () => {
    it("should return true and have custom error message", () => {
        const testValue = [1, 2, 3];
        const customerErrorMessage = `Wrong guess.`;
        const validator = (0, elementOf_validator_1.elementOf)(testValue, customerErrorMessage);
        const inputValue = 3;
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(customerErrorMessage);
        var isValid = validator.validate(inputValue);
        expect(isValid).toEqual(true);
    });
});
describe("ElementOfValidator Test", () => {
    it("should return true and have custom error message", () => {
        const testValue = ["Indonesia", "India", "UK", "USA"];
        const customerErrorMessage = `Wrong guess.`;
        const validator = (0, elementOf_validator_1.elementOf)(testValue, customerErrorMessage);
        const inputValue = "Indonesia";
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(customerErrorMessage);
        var isValid = validator.validate(inputValue);
        expect(isValid).toEqual(true);
    });
});
describe("ElementOfValidator Test", () => {
    it("should return false and have custom error message", () => {
        const testValue = [
            {
                id: 1,
                name: "john"
            },
            {
                id: 2,
                name: "karen"
            }
        ];
        const customerErrorMessage = `Wrong guess.`;
        const validator = (0, elementOf_validator_1.elementOf)(testValue, customerErrorMessage);
        //The following IS NOT the reference element of the above array. Even it looks similar.
        const inputValue = {
            name: "john",
            id: 1,
        };
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(customerErrorMessage);
        var isValid = validator.validate(inputValue);
        expect(isValid).toEqual(false);
    });
});
describe("ElementOfValidator Test", () => {
    it("should return true and have custom error message", () => {
        const testValue = [
            {
                id: 1,
                name: "john"
            },
            {
                id: 2,
                name: "karen"
            }
        ];
        const customerErrorMessage = `Wrong guess.`;
        const validator = (0, elementOf_validator_1.elementOf)(testValue, customerErrorMessage);
        //The following IS the reference element of the above array.
        const inputValue = testValue.find(x => x.id === 1);
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(customerErrorMessage);
        var isValid = validator.validate(inputValue);
        expect(isValid).toEqual(true);
    });
});