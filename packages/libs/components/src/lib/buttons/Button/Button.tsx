import { FC, PropsWithChildren } from "react";

import type { ButtonProps } from "./Button.d";
import { StyledButton } from "./Button.styles";

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    ...props
}) => (
    <StyledButton {...props}>
        {children}
    </StyledButton>
);