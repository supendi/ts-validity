import { ErrorOf, PropertyValidationResult, PropertyValidator, ValidationResult, ValidationRule, ArrayValidationRule } from "./types";

/**
 * Do a single validation against single property
 * @param propName 
 * @param object 
 * @param propValidator 
 * @returns 
 */
const validateProperty = <TValue, TObject>(propName: keyof TObject, object: TObject, propValidator: PropertyValidator<TValue, TObject>): PropertyValidationResult<TObject> => {
    const value = object[propName]
    const isValid = propValidator.validate(value as unknown as TValue, object)

    var errorMessage = propValidator.returningErrorMessage
    if (propValidator.returningErrorMessage) {
        errorMessage = propValidator.returningErrorMessage.replace(":value", value as any)
    }

    const validationResult: PropertyValidationResult<TObject> = {
        object: object,
        propertyName: propName,
        propertyValue: value,
        errorMessage: errorMessage,
        isValid: isValid
    }

    return validationResult
}

/**
 * Validates and collects errors of each property as array of string
 * @param object 
 * @param validationRule 
 * @returns 
 */
export const getErrorOf = <T>(object: T, validationRule: ValidationRule<T>): ErrorOf<T> => {
    var errors: ErrorOf<T> = undefined

    //Iterate against validation rule instead.
    //Example : the rule is {name:[required()]}, if we passed an empty object {}, then the validation wont work. It will always returns empty errors, which is very wrong. 
    for (const key in validationRule) {
        if (Object.prototype.hasOwnProperty.call(validationRule, key)) {
            const value = object[key];

            const rule = validationRule[key]
            if (!rule) {
                continue
            }

            // if rule is array it probably means rule = PropertyValidator []
            const isRuleAnArray = Array.isArray(rule)
            if (isRuleAnArray) {
                for (let index = 0; index < rule.length; index++) {
                    const propValidator = rule[index]
                    if (!propValidator) {
                        continue
                    }

                    const isPropValidator = !!propValidator.validate
                    if (!isPropValidator) {
                        continue
                    }

                    const propValidationResult = validateProperty(key, object, propValidator)

                    const isValid = propValidationResult.isValid

                    if (!isValid) {
                        if (!errors) {
                            errors = {} as ErrorOf<T>
                        }
                        if (!errors[key]) {
                            errors[key as any] = []
                        }

                        (errors[key] as string[]).push(propValidationResult.errorMessage)
                    }
                }
                continue
            }

            // If property value is an array, means the property data type is array and it has different treatment
            const valueIsArray = Array.isArray(value)
            if (valueIsArray) {

                const childObject = object[key]
                const childValidationRule = rule as ArrayValidationRule<T, typeof childObject>;
                if (childValidationRule.validators) {
                    for (let index = 0; index < childValidationRule.validators.length; index++) {
                        const propValidator = childValidationRule.validators[index];

                        if (!propValidator) {
                            continue
                        }

                        const isPropValidator = !!propValidator.validate && !!propValidator.returningErrorMessage
                        if (!isPropValidator) {
                            continue
                        }

                        const propValidationResult = validateProperty(key, object, propValidator as any)

                        const isValid = propValidationResult.isValid

                        if (!isValid) {
                            if (!errors) {
                                errors = {}
                            }
                            if (!errors[key]) {
                                errors[key as any] = {}
                            }
                            if (!errors[key as any].errors) {
                                errors[key as any].errors = []
                            }
                            errors[key as any].errors.push(propValidationResult.errorMessage)
                        }
                    }
                }
                if (childValidationRule.validationRule) {
                    for (let index = 0; index < value.length; index++) {
                        const element = value[index];
                        const error = getErrorOf(element, childValidationRule.validationRule)
                        if (error) {
                            if (!errors) {
                                errors = {}
                            }
                            if (!errors[key]) {
                                errors[key as any] = {}
                            }
                            if (!errors[key as any].errorsEach) {
                                errors[key as any].errorsEach = []
                            }
                            errors[key as any].errorsEach.push({
                                index: index,
                                errors: error,
                                validatedObject: element
                            })
                        }
                        continue
                    }
                }
                continue
            }

            const typeofValue = typeof (value)
            if (typeofValue === "object") {
                const childObject = object[key]
                if (!childObject) {
                    
                    if (!errors) {
                        errors = {}
                    }
                    if (!errors[key]) {
                        errors[key as any] = {}
                    }
                    errors[key as any] = { 
                        errors: [`Could not validate property '${key}', the value is ${value}`], 
                    }
                    continue
                }

                const childValidationRule = rule as ValidationRule<typeof childObject>;
                const error = getErrorOf(childObject, childValidationRule)
                if (error) {
                    if (!errors) {
                        errors = {}
                    }
                    if (!errors[key]) {
                        errors[key as any] = {}
                    }
                    errors[key as any] = error
                }
            }
        }
    }
    return errors
}

/**
 * Represents the validation message when the validation process is done.
 */
export interface ValidationMessage {
    okMessage: string
    errorMessage: string
}

/**
 * Validates an object with the specified validation rule
 * @param object 
 * @param validationRule 
 * @returns ValidationResult
 */
export const validateObject = <T>(object: T, validationRule: ValidationRule<T>, validationMessage: ValidationMessage = { okMessage: "Good to go.", errorMessage: "One or more validation errors occurred." }): ValidationResult<T> => {
    const errors = getErrorOf(object, validationRule)
    let isValid = true

    for (const key in errors) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
            const error = errors[key];
            if (error) {
                isValid = false
                break
            }
        }
    }

    return {
        message: isValid ? validationMessage.okMessage : validationMessage.errorMessage,
        isValid: isValid,
        errors: errors,
    }
}


const objectValidator = {
    validate: validateObject
}

export default objectValidator