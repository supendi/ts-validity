import { tsValidity, maxSumOf } from "../../index"
import { ValidationRule } from "../../types"
import { ValidationResult } from "../../tsValidity"
import { required, } from "../../propertyRules"

const defaultMessage = { okMessage: "Good to go.", errorMessage: "One or more validation errors occurred." }

describe("validate login request", () => {
    it("returns errors when username and password are empty", () => {
        interface LoginRequest {
            userName: string
            password: string
        }

        const loginRule: ValidationRule<LoginRequest> = {
            userName: [required("Please enter user name.")],
            password: [required("Please enter password.")]
        }

        const loginRequest: LoginRequest = {
            userName: "",
            password: ""
        }

        const actual = tsValidity.validate(loginRequest, loginRule)

        const expected: ValidationResult<LoginRequest> = {
            message: defaultMessage.errorMessage,
            isValid: false,
            errors: {
                userName: ["Please enter user name."],
                password: ["Please enter password."],
            }
        }

        expect(actual).toEqual(expected)
    })
})
