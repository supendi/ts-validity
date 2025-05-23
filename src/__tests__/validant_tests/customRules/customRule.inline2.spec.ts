import { Validator, ValidationRule } from "../../../index"

interface Account {
    name: string,
}

const validationRule: ValidationRule<Account> = {
    name: [
        (value, object) => {
            return {
                isValid: value.length >= 5,
                errorMessage: "Name length minimum is 5 chars."
            }
        },
        (value, object) => {
            // Must contain A letter 
            return {
                isValid: value.toLocaleLowerCase().includes("a"),
                errorMessage: "Name must contain 'A' letter."
            }
        }
    ]
}

describe("Test Inline Custom Rule", () => {
    it("Should return errors", () => {
        const account: Account = {
            name: "John",
        }

        const validator = new Validator(validationRule)
        const validationResult = validator.validate(account)

        const expected = {
            message: "One or more validation errors occurred.",
            isValid: false,
            errors: {
                name: ["Name length minimum is 5 chars.", "Name must contain 'A' letter."]
            }
        }

        expect(validationResult).toEqual(expected)
    })
})
