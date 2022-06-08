import styled from "styled-components";

export const StandardsTable =styled.table`

`;

export const StandardsTableBody = styled.tbody`
    tr:nth-child(even) {
        background-color: #F2F2F2;
    }
`;

export const StandardsTableHeader = styled.th`
    border: 1px solid #ddd;
    font-weight: 600;
    padding: 0.25rem;
`;

export const StandardsTableRow = styled.tr`
    border: 1px solid #ddd;
    padding: 0.5rem;
`;

export const StandardsTableData = styled.td`
    text-align: center;
`;