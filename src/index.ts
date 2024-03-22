import validator from "./objectValidator";
import { ErrorOf, ValidationRule, ValidationResult, ValidatorFunc, PropertyValidationResult, PropertyValidator, StringifiedErrorOf, StringifiedValidationResult, ValidationRuleForArrayOf, ErrorOfArray, IndexedErrorOf } from './types'
import { emailAddress, equalToFieldValue, maxLength, maxNumber, minLength, minNumber, minSumOf, maxSumOf, regularExpression, required, elementOf } from './validators/'

export default validator

export {
    elementOf,
    emailAddress,
    equalToFieldValue,
    maxLength,
    maxNumber,
    minLength,
    minNumber,
    regularExpression,
    required,
    minSumOf,
    maxSumOf
}

export {
    ErrorOf,
    ErrorOfArray,
    IndexedErrorOf,
    ValidationRule,
    ValidationResult,
    ValidatorFunc,
    PropertyValidationResult as FieldValidationResult,
    PropertyValidator as FieldValidator,
    StringifiedErrorOf,
    StringifiedValidationResult,
    ValidationRuleForArrayOf,
} 
