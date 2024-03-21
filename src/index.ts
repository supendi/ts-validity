import validator from "./objectValidator";
import { ArrayStringErrorOf, ValidationRule, ValidationResult, ValidatorFunc, FieldValidationResult, FieldValidator, StringifiedErrorOf, StringifiedValidationResult, ValidationRuleForArrayOf } from './types'

import { elementOf } from './validators/elementOf-validator'
import { emailAddress } from './validators/emailAddress-validator'
import { equalToFieldValue } from './validators/equalToFieldValue-validator'
import { maxLength } from './validators/maxLength-validator'
import { maxNumber } from './validators/maxNumber-validator'
import { minLength } from './validators/minLength-validator'
import { minNumber } from './validators/minNumber-validator'
import { minSumOf } from './validators/minSumOf-validator'
import { regularExpression } from './validators/regularExpression-validator'
import { required } from './validators/required-validator'

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
    minSumOf
}

export {
    ArrayStringErrorOf,
    ValidationRule,
    ValidationResult,
    ValidatorFunc,
    FieldValidationResult,
    FieldValidator,
    StringifiedErrorOf,
    StringifiedValidationResult,
    ValidationRuleForArrayOf,
} 
