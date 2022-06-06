import { Option } from "../../types";

/**
 * 
 * @param value 
 * @returns 
 */
export const getOptionFromValue = (value:string): Option => ({ label: value, value });