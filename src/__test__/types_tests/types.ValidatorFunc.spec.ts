import { ValidatorFunc } from "../../types"

/**
 * Ensure all the code below compiled
 */

describe("ValidatorFunc Test", () => {
    it("Should compile", () => {
        const validatorFunc: ValidatorFunc<any, any> = function (value: any, objRef?: any) {
            return true
        }

        expect(validatorFunc).not.toBeNull()
    })
})
