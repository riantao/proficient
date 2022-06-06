import styled from "styled-components";

export const Tr = styled.tr`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    &:nth-child(even) {
        background-color: #F2F2F2;
    }

    a {
        width: 100%;
    }
`;