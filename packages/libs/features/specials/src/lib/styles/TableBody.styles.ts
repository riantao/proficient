import styled from "styled-components";

export const TableBody = styled.tbody`    
    tr {
        cursor: pointer;

        div {
           text-align: left;
        }      

        &:nth-child(even) {
            background-color: #F2F2F2;
        }

        &:hover {
            background-color: #FAFAFA;
        }
    }
`;