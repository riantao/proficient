import { Option } from "../../types";

/**
 * @function optionComparator
 * @param {Option} a first option 
 * @param {Option} b second option
 * @returns {number}
 */
export const optionComparator = (a: Option, b: Option) => a.label > b.value ? 1: -1;