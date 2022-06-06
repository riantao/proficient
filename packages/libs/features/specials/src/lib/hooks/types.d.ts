import { ReactNode } from "react";
import { MultiValue, SingleValue } from "react-select";

import { SelectOption, Special } from "@proficient/types";

export interface InputProps {
    
}

interface TableSelectBase {
    readonly placeholder?: string;
    readonly options?: SelectOption[];
}

export interface TableSelectDependencies extends TableSelectBase {

}

export interface TableSelectProps <
    V extends SelectOption | readonly SelectOption[] | null, 
    T extends SingleValue<SelectOption> | MultiValue<SelectOption>,
    M extends true | false
> extends TableSelectBase {
    readonly onChange: (opt: T) => void;
    readonly value: V;
    readonly isMulti: M;
}

export interface SpecialsInternalProps {
    readonly selectedSpecial: Special | null;
    readonly filteredSpecials: Special[];
    readonly renderSpecial: (special: Special) => ReactNode;
}