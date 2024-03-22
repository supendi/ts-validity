"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxLength_validator_1 = require("../../validators/maxLength-validator");
describe("MaxLengthValidator Test", () => {
    it("should return false and have default error message", () => {
        const maxValue = 2;
        const validator = (0, maxLength_validator_1.maxLength)(maxValue);
        const myArray = [1, 2, 3];
        const defaultValidatorErrorMessage = `The maximum length for this field is ${maxValue}.`;
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(defaultValidatorErrorMessage);
        var isValid = validator.validate(myArray);
        expect(isValid).toEqual(false);
    });
});
describe("MaxLengthValidator Test", () => {
    it("should return false and have custom error message", () => {
        const maxValue = 1;
        const customErrorMessage = `The maximum length for this field is ${maxValue}`;
        const validator = (0, maxLength_validator_1.maxLength)(maxValue, customErrorMessage);
        const orderItems = [1, 2];
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(customErrorMessage);
        var isValid = validator.validate(orderItems);
        expect(isValid).toEqual(false);
    });
});
describe("MaxLengthValidator Test", () => {
    it("should return true and have custom error message", () => {
        const maxValue = 2;
        const customErrorMessage = `The maximum length for this field is ${maxValue}`;
        const validator = (0, maxLength_validator_1.maxLength)(maxValue, customErrorMessage);
        const orderItems = [
            101,
            10
        ];
        expect(validator).not.toBeUndefined();
        expect(validator.validate).not.toBeUndefined();
        expect(validator.returningErrorMessage).toEqual(customErrorMessage);
        var isValid = validator.validate(orderItems);
        expect(isValid).toEqual(true);
    });
});