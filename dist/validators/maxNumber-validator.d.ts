import { PropertyValidator } from "../types";
declare type MaxNumberValidator = <T>(max: number, errorMessage?: string) => PropertyValidator<T>;
/**
 * Specifies the rule of maximum value of a number.
 * @param errorMessage Custom error messages
 * @returns
 */
export declare const maxNumber: MaxNumberValidator;
export {};
