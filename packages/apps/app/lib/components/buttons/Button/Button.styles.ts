import styled from "styled-components";

import type { ButtonProps } from "./Button.d";

export const StyledButton = styled.button<ButtonProps>`
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
`;