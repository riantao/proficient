import { FC } from "react";

import { Label } from "../Label";
import { Input } from "../Input";

import { InputGroup as Container } from "./InputGroup.styles";
import type { InputGroupProps } from "./InputGroup.d";

export const InputGroup: FC<InputGroupProps> = ({
    label,
    onChange,
    value,
    name,
    placeholder
}) => (
    <Container>
        <Label htmlFor={name}>{label}</Label>
        <Input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
        />
    </Container>
);

export default InputGroup;