import { ChangeEventHandler } from "react";
import { useState } from "react";

export const useInputFilter = ({ 
    placeholder
}) => {
    const [value, setValue] = useState("");
    
    const handleChange: ChangeEventHandler<HTMLInputElement> = e => setValue(e.target.value); 

    return {
        placeholder,
        value,
        onChange: handleChange
    };
};
