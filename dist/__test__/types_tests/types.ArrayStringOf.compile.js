"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ensure all the code below compiled
 */
describe("ArrayStringErrorOf Simple Person Test", () => {
    it("Should compile", () => {
        const actual = {
            age: [
                "Age is required",
                "Maximum age is 56"
            ],
            name: [
                "Name is required",
                "Minimum chars of person name is 2"
            ]
        };
        expect(!actual).not.toBeNull();
    });
});
describe("ArrayStringErrorOf Complex Person Test", () => {
    it("Should compile", () => {
        const actual = {
            age: [
                "Age is required",
                "Maximum age is 56"
            ],
            name: [
                "Name is required",
                "Minimum chars of person name is 2"
            ],
            birtDate: [
                "Birtdate is required",
                "Date cannot be future"
            ],
            address: {
                cityId: ["invalid city id ''"],
                street: ["Please enter street name"]
            },
            children: {
                fieldErrors: [],
                indexedErrors: [
                    {
                        index: 0,
                        errors: {
                            // Ensure If age/other property is an optional error,it doesn't have any errors
                            // age: [
                            //     "Age is required",
                            //     "Children age cannot be greater than parent"
                            // ],
                            name: [
                                "Minimum chars of person name is 2"
                            ],
                            birtDate: [
                                "Date cannot be future"
                            ],
                            address: {
                                // cityId: ["invalid city id ''"], //ensure each property is optional
                                street: ["Please enter street name"]
                            },
                        }
                    }
                ]
            }
        };
        expect(!actual).not.toBeNull();
    });
});
describe("ArrayStringErrorOf Complex Person Test", () => {
    it("Should compile", () => {
        const actual = {
            age: [
                "Age is required",
                "Maximum age is 56"
            ],
            name: [
                "Name is required",
                "Minimum chars of person name is 2"
            ],
            birtDate: [
                "Birtdate is required",
                "Date cannot be future"
            ],
            addresses: {
                fieldErrors: [],
                indexedErrors: [
                    {
                        index: 0,
                        errors: {
                            cityId: ["invalid city id ''"],
                            street: ["Please enter street name"]
                        }
                    }
                ]
            },
            children: {
                fieldErrors: [],
                indexedErrors: [
                    {
                        index: 0,
                        errors: {
                            // If age doesnt have errors
                            // age: [
                            //     "Age is required",
                            //     "Children age cannot be greater than parent"
                            // ],
                            name: [
                                "Minimum chars of person name is 2"
                            ],
                            birtDate: [
                                "Date cannot be future"
                            ],
                            addresses: {
                                fieldErrors: [],
                                indexedErrors: [
                                    {
                                        index: 0,
                                        errors: {
                                            // cityId: ["invalid city id ''"], //ensure each property is optional
                                            street: ["Please enter street name"]
                                        }
                                    }
                                ]
                            },
                        }
                    }
                ]
            }
        };
        expect(!actual).not.toBeNull();
    });
});