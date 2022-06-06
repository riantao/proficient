import { SelectOption } from "@proficient/types";
import { useState } from "react";
import { MultiValue } from "react-select";
import { TableSelectDependencies, TableSelectProps } from "./types";

export const useMultiSelectFilter = ({
    placeholder = "",
    options
}: TableSelectDependencies): TableSelectProps<readonly SelectOption[], MultiValue<SelectOption>, true> => {
    const [value, setValue] = useState<readonly SelectOption[]>([]);

    const handleChange = (opts: MultiValue<SelectOption>) => setValue(opts);

    return {
        options,
        value,
        onChange: handleChange,
        placeholder,
        isMulti: true
    };
};