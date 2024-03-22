"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minLength = void 0;
/**
 * Specifies the minimum length of an array.
 * @param errorMessage Custom error messages
 * @returns
 */
const minLength = (min, errorMessage) => {
    let msg = `The minimum length for this field is ${min}.`;
    if (errorMessage) {
        msg = errorMessage;
    }
    const validateFunc = (value, objRef) => {
        if (!value) {
            return false;
        }
        if (min < 1) {
            console.error("Validator: min length should be > 0");
            return false;
        }
        const valueIsArray = Array.isArray(value);
        if (!valueIsArray) {
            return false;
        }
        let actualLength = value.length;
        return actualLength >= min;
    };
    const propValidator = {
        description: "Specifies the minimum length of an array.",
        returningErrorMessage: msg,
        validate: validateFunc
    };
    return propValidator;
};
exports.minLength = minLength;
