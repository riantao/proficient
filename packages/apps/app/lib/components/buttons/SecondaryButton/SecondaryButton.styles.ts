import styled from "styled-components";

import { Color } from "../../../styles";

import { Button } from "../Button";

export const StyledButton = styled(Button)`
    background-color: ${Color.SECONDARY};
    color: ${Color.TEXT};

    &:hover,
    &:hover,
    &:hover {
        background-color: ${Color.SECONDARY_PSEUDO};
    }
`;