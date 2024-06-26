import { PropertyValidator, ValidateFunc } from "../types";

/**
* The base property validator. Use this as a custom validator.
* @param func 
* @param errorMessage 
* @returns 
*/
export const propertyValidator = <TValue, TObject>(func: ValidateFunc<TValue, TObject>, errorMessage: string, validatorDescription?: string): PropertyValidator<TValue, TObject> => {
    if (!errorMessage) {
        throw new Error(`You are calling the ${propertyValidator.name}. The error message needs to be set. The assigned error message is '${errorMessage}'`)
    }

    const validateFunc: ValidateFunc<TValue, TObject> = (value, object): boolean => {
        return func(value, object)
    }

    const propValidator: PropertyValidator<TValue, TObject> = {
        description: validatorDescription ? validatorDescription : "The base property validator. Use this as a custom validator.",
        returningErrorMessage: errorMessage,
        validate: validateFunc
    }
    return propValidator
}
