import { FC, PropsWithChildren } from "react";
import { StyledLabel } from "./Label.styles";
import { LabelProps } from "./Label.d";

export const Label: FC<PropsWithChildren<LabelProps>> = ({ 
    htmlFor, 
    children 
}) => (
    <StyledLabel htmlFor={htmlFor}>
        {children}
    </StyledLabel>
);

export default Label;