import { Special } from "@proficient/types";
import { TableRow as Tr, TableData as Td } from "../styles";

export const padTableRows = (filteredSpecials: Special[]): JSX.Element[] => {
    const MIN_TABLE_ROWS = 10;

    if(filteredSpecials.length >= MIN_TABLE_ROWS)
        return [];

    const rows: JSX.Element[] = [];

    for(let i = 0, l = MIN_TABLE_ROWS - filteredSpecials.length; i < l; i++) 
        rows.push(
        <Tr>
            <Td><div></div></Td>
            <Td><div></div></Td>
            <Td><div></div></Td>
            <Td><div></div></Td>
        </Tr>
    );

    return rows;
};