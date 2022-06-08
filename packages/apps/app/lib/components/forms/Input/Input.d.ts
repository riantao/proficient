import { ChangeEventHandler } from "react";

export interface InputProps {
    readonly value: string;
    readonly placeholder?: string;
    readonly name?: string;
    readonly onChange: ChangeEventHandler<HTMLInputElement>;
}