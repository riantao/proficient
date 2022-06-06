import { ChangeEventHandler, useState } from "react";

// TODO: Extend common interfaces to couple types

type InputType =
    "button" | 
    "checkbox" |
    "color" |
    "date" |
    "datetime-local" |
    "email" |
    "file" |
    "hidden" |
    "image" |
    "month" |
    "number" |
    "password" |
    "search" |
    "submit" |
    "tel" | 
    "text" |
    "time" |
    "url" | 
    "week";

interface InputGroupDependencies  {
    readonly initialValue?: string; 
    readonly htmlFor?: string;
    readonly label?: string;
    readonly name?: string;
    readonly placeholder?: string;
    readonly type?: string;
}

interface InputGroupInternalProps {
    readonly value: string;
    readonly onChange: ChangeEventHandler<HTMLInputElement>;
    readonly label?: string;
    readonly name?: string;
    readonly placeholder?: string;
    readonly type: string;
}

/**
 * @function useInputGroupProps
 * @param {InputGroupDependencies} deps
 * @returns {InputGroupProps}
 */
export const useInputGroup = ({
    label,
    name,
    placeholder,
    initialValue = "",
    type = "text"
}: InputGroupDependencies): InputGroupInternalProps => {
    const [value, setValue] = useState(initialValue);

    const handleChange:ChangeEventHandler<HTMLInputElement> = e => 
        setValue(e.target.value);

    return {
        value,
        onChange: handleChange,
        label,
        name,
        placeholder,
        type
    };
}