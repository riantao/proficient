import styled from "styled-components";

export const Container = styled.div`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    height: 500px;
`;

export const Col = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const Row = styled.div`
    margin: 2rem 0;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
`;

export const Textarea = styled.textarea`
    resize: none;
    width: 100%;
`;