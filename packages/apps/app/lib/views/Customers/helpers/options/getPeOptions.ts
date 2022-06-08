import { Customer } from "@proficient/types";
import { uniqueBy } from "@proficient/utils";

/**
 * @function getPeOptions
 * @param {Customer[]} customers 
 * @returns {string[]} list of PEs
 */
export const getPeOptions = (customers: Customer[]): string[] => 
    uniqueBy(customers, customer => customer.projectEngineer).map(c => c.projectEngineer)