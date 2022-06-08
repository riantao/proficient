import styled from "styled-components";

export const Tbody = styled.tbody`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    &:nth-child(even) {
        background-color: #F2F2F2;
    }
`;