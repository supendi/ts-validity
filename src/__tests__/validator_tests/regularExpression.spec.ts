import { regularExpression } from "../../propertyValidators/regularExpression"


describe(`Test ${regularExpression.name}`, () => {
    it("should return false and have default error message", () => {
        const testValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d])([A-Za-z\d]|[^a-zA-Z\d]){8,}$/
        const validator = regularExpression(testValue)
        const defaultValidatorErrorMessage = `The value ':value' doesn't match with the specified regular expression.`
        const inputValue = "Hallo"

        expect(validator).not.toBeUndefined()
        expect(validator.validate).not.toBeUndefined()
        expect(validator.returningErrorMessage).toEqual(defaultValidatorErrorMessage)
        var isValid = validator.validate(inputValue)

        expect(isValid).toEqual(false)
    })
})

describe(`Test ${regularExpression.name}`, () => {
    it("should return false and have custom error message", () => {
        const testValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d])([A-Za-z\d]|[^a-zA-Z\d]){8,}$/
        const customErrorMessage = `Invalid value`
        const validator = regularExpression(testValue, customErrorMessage)
        const inputValue = "cumaMisCall1"

        expect(validator).not.toBeUndefined()
        expect(validator.validate).not.toBeUndefined()
        expect(validator.returningErrorMessage).toEqual(customErrorMessage)

        var isValid = validator.validate(inputValue)

        expect(isValid).toEqual(false)
    })
})

describe(`Test ${regularExpression.name}`, () => {
    it("should return true and have custom error message", () => {
        const testValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d])([A-Za-z\d]|[^a-zA-Z\d]){8,}$/
        const customErrorMessage = `Invalid value`
        const validator = regularExpression(testValue, customErrorMessage)
        const inputValue = "ThisIsStrongPassword123.,"

        expect(validator).not.toBeUndefined()
        expect(validator.validate).not.toBeUndefined()
        expect(validator.returningErrorMessage).toEqual(customErrorMessage)

        var isValid = validator.validate(inputValue)

        expect(isValid).toEqual(true)
    })
}) 