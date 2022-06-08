import { SelectOption } from "@proficient/types";

/**
 * @function optionComparator
 * @param {Option} a first option 
 * @param {Option} b second option
 * @returns {number}
 */
export const optionComparator = (a: SelectOption, b: SelectOption) => a.label > b.label ? 1: -1;