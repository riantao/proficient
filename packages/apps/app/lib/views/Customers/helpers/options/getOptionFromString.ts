import { SelectOption } from "@proficient/types";

/**
 * 
 * @param value 
 * @returns {}
 */
export const getOptionFromValue = (value:string): SelectOption => ({ label: value, value });