import { PropertyRuleValidationResult } from "../../types/ValidationRule"


describe("PropertyRuleValidationResult Test", () => {
    it("Should compile", () => {
        let validationResult: PropertyRuleValidationResult = {
            isValid: true,
            errorMessage: "No error"
        }

        expect(validationResult).not.toBeNull()
    })
})
