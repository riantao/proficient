import { SelectOption } from "@proficient/types";
import { useState } from "react";
import { SingleValue } from "react-select";
import { TableSelectDependencies, TableSelectProps } from "./types";


/**
 * @function
 * @param {} deps
 * @returns {}
 */
export const useSelectFilter = ({ 
    options = [],
    placeholder = ""
}: TableSelectDependencies): TableSelectProps<SelectOption | null, SingleValue<SelectOption>, false> => {
    const [value, setValue] = useState<SelectOption | null>(null);

    const handleChange = (opt: SingleValue<SelectOption>) => setValue(opt);

    return {
        options,
        placeholder,
        value,
        onChange: handleChange,
        isMulti: false
    };
};

