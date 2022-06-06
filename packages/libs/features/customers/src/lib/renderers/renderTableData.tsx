import { ReactNode } from "react";
import { Td, Tr } from "../styles";
import { Customer } from "@proficient/types";

/**
 * @function renderTableData
 * @param {Customer} customer
 * @returns {ReactNode}
 */
 export const renderTableData = ({ slug, title, areaManager, projectEngineer }: Customer): ReactNode => (
    <a href={`/customers/${slug}`}>
        <Tr key={slug} role="row">
            <Td>{title}</Td>
            <Td>{projectEngineer}</Td>
            <Td>{areaManager}</Td>
        </Tr>
    </a>
);