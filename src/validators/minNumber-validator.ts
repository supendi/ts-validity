import { PropertyValidator, ValidatorFunc } from "../types";

type MinNumberValidator = <T>(min: number, errorMessage?: string) => PropertyValidator<T>


/**
 * Returns a minimum number validation rule
 * @param errorMessage Custom error messages
 * @returns 
 */
export const minNumber: MinNumberValidator = <T>(min: number, errorMessage?: string) => {

    let msg = `The minimum value for this field is ${min}.`
    if (errorMessage) {
        msg = errorMessage
    }

    const validatorFunc: ValidatorFunc<T> = (value: number, objRef?: T): boolean => {
        if (!value) {
            return false
        }

        return value >= min
    }

    const validator: PropertyValidator<T> = {
        description: "Spesify the minimum value of number rule.",
        validate: validatorFunc,
        returningErrorMessage: msg,
    }

    return validator
}
