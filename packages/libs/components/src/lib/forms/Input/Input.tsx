import { FC } from "react";

import { InputProps } from "./Input.d";
import { StyledInput } from "./Input.styles";

/**
 * @module Input
 * @param {InputProps} props 
 * @returns {ReactElement}
 */
export const Input: FC<InputProps> = props => 
    <StyledInput {...props} />;

export default Input;