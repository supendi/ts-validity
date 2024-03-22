import { PropertyValidator, ValidatorFunc } from "../types";

type RequiredValidator = (errorMessage?: string) => PropertyValidator

/**
 * The validator of required property
 * @param errorMessage Custom error messages
 * @returns 
 */
export const required: RequiredValidator = (errorMessage?: string) => {
    let msg = "This field is required."
    if (errorMessage) {
        msg = errorMessage
    }

    const validatorFunc: ValidatorFunc = (value: any, objRef?: any): boolean => {
        if (!value) {
            return false
        }
        return true
    }

    const propValidator: PropertyValidator = {
        description: "Validates if a property value is required",
        returningErrorMessage: msg,
        validate: validatorFunc
    }
    return propValidator
}
