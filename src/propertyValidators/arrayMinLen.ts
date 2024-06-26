import { PossiblyUndefined, PropertyValidator, ValidateFunc } from "../types"

/**
 * Specifies the minimum length of an array.
 * @param errorMessage Custom error messages
 * @returns 
 */
export const arrayMinLen = <TValue, TObject>(min: number, errorMessage?: string) => {

    let msg = `The minimum length for this field is ${min}.`
    if (errorMessage) {
        msg = errorMessage
    }

    const validateFunc: ValidateFunc<TValue[], TObject> = (value, objRef): boolean => {

        if (!value) {
            return false
        }
        if (min < 1) {
            console.warn("arrayMinLen: min length should be > 0")
            return false
        }
        const valueIsArray = Array.isArray(value)
        if (!valueIsArray) {
            return false
        }
        let actualLength = value.length
        return actualLength >= min
    }

    const propValidator: PropertyValidator<PossiblyUndefined<TValue[]>, TObject> = {
        description: "Specifies the minimum length of an array.",
        returningErrorMessage: msg,
        validate: validateFunc
    }
    return propValidator
}