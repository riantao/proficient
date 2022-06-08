import { InputProps } from "../Input";
import { LabelProps } from "../Label";

export interface InputGroupProps extends InputProps, Omit<LabelProps, "htmlFor"> {
    readonly name?: string;
    readonly label?: string;
}