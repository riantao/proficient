import { FC, PropsWithChildren } from "react";

import { ButtonProps } from "../Button";
import { StyledButton } from "./SecondaryButton.styles";

export const SecondaryButton: FC<PropsWithChildren<ButtonProps>> = ({ 
    children, 
    ...props 
}) => (
    <StyledButton {...props}>
        {children}
    </StyledButton>
);