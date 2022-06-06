import { useState } from "react";
import { SingleValue } from "react-select";

import { Customer, SelectOption } from "@proficient/types";

import { optionComparator, getOptionFromValue } from "../helpers";

interface TableFilterDeps {
    /** Modifier that transforms the customers into string values of the desired prop*/
    readonly getOptions: (customer: Customer[]) => string[]
    /** Customer data */
    readonly customers: Customer[];
}

export interface TableFilterProps {
    /** Current selected option of the Select component */
    readonly value: SelectOption | null;
    /** event handler that fires when the selected option changes */
    readonly onChange: (opt: unknown) => void;
    /** Options of the Select component */
    readonly options: SelectOption[];
    /** Boolean allowing for the select component to be cleared */
    readonly isClearable: boolean;
}

export const useTableFilter = ({
    getOptions,
    customers
}: TableFilterDeps): TableFilterProps => {
    const [value, setValue] = useState<SelectOption | null>(null);

    const handleChange = (opt: SingleValue<SelectOption>) => setValue(opt);

    return {
        value,
        onChange: handleChange as (newValue: unknown) => void,
        options: 
        getOptions(customers)
            // Return option that matches the current value of the respective filter 
            .filter(customer => {  
                // Don't filter options if filter value is falsy 
                if(!value)
                    return true;

                // Check if customer prop is equal to the value of the current filter
                return customer === value.value;
            })
            .map(getOptionFromValue)
            .sort(optionComparator),
        isClearable: true
    };
};