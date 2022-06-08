import { Customer } from "@proficient/types";

/**
 * @function getCustomerOptions
 * @param {Customer[]} customers 
 * @returns {string[]}
 */
export const getCustomerOptions = (customers: Customer[]) => 
    customers.map(c => c.title)