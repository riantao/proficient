import styled from "styled-components";

import { Color } from "../../../../styles";

import { Link as A } from "../../../touchables";

export const Nav = styled.nav`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    padding: 1rem;
    border-right: 1px solid #CCC;

    a {
        padding: 0.25rem;
    }
`;

export const Link = styled(A)`
    color: ${Color.PRIMARY};
`;