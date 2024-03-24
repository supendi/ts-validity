import { PropertyValidator, ValidatorFunc } from "../types";

type PropValidator = <TValue, TObject>(func: ValidatorFunc<TValue, TObject>, errorMessage: string) => PropertyValidator<TValue, TObject>

/**
* The base property validator. Use this as a custom validator.
* @param func 
* @param errorMessage 
* @returns 
*/
export const propertyValidator: PropValidator = <TValue, TObject>(func: ValidatorFunc<TValue, TObject>, errorMessage: string) => {
    if (!errorMessage) {
        console.error((`You are calling the ${propertyValidator.name}. The error message needs to be set. The assigned error message is '${errorMessage}'`))
    }

    const validatorFunc: ValidatorFunc<TValue, TObject> = (value, object): boolean => {
        return func(value, object)
    }

    const propValidator: PropertyValidator<TValue, TObject> = {
        description: "The base property validator. Use this as a custom validator.",
        returningErrorMessage: errorMessage,
        validate: validatorFunc
    }
    return propValidator
}
