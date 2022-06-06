import { Customer } from "@proficient/types";
import { TableFilterProps } from "../../hooks";

/**
 * @function byFilterPredicate
 * @param {keyof Customer} key selected key of customer
 * @param {TableFilterProps} selectProps 
 * @returns {(customer: Customer) => boolean} filter predicate
 */
export const byFilterPredicate = (key: keyof Customer, selectProps: TableFilterProps) => (c: Customer): boolean => {
    if(!selectProps.value)
        return true;

    return c[key] === selectProps.value.value;
}