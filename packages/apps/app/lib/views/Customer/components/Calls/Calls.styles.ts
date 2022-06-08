import styled from "styled-components";

export const CallsTable = styled.table`

`;

export const CallsTableHead = styled.thead`

`;

export const CallsTableBody = styled.tbody`
    tr:nth-child(even) {
        background-color: #F2F2F2;
    }
`;

export const CallsTableRow = styled.tr`
    border: 1px solid #ddd;
    padding: 0.5rem;
`;

export const CallsTableHeader = styled.th`
    border: 1px solid #ddd;
    font-weight: 600;
    min-width: 75px;
    padding: 0.25rem;
`;

export const CallsTableData = styled.td`
    text-align: center;
`;