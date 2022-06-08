import { FC } from "react";

import { useCustomerStandards } from "./hooks";
import { CustomerStandardsProps } from "./Standards.d";
import {
    StandardsTable as Table,
    StandardsTableHeader as Th,
    StandardsTableRow as Tr,
    StandardsTableData as Td,
    StandardsTableBody as Tbody
} from "./Standards.styles";

export const Standards: FC<CustomerStandardsProps> = ({
    customer,
    projects
}) => {
    const {
        optionsGroups,
        facilitiesByProject,
        projectsByConfig,
        renderEmptyCell,
        renderCheckedRow,
        renderDeliveryYear,
        renderProjectId,
        renderSerialNumber,
        renderCustomerFacility,
        renderProjectConfig
    } = useCustomerStandards({ projects, customer });

    const specials = [];

    return (
        <Table role="table">
            <Tr role="row">
                <Th></Th>
                <Th>Customer</Th>
                <Th colSpan={projects.length}>{customer.title}</Th>
            </Tr>
            <Tr role="row">
                <Th></Th>
                <Th>Facility</Th>
                {facilitiesByProject.map(renderCustomerFacility)}
            </Tr>
            <Tr role="row">
                <Th></Th>
                <Th>Config</Th>
                {projectsByConfig.map(renderProjectConfig)}
            </Tr>
            <Tr role="row">
                <Th></Th>
                <Th>Projects</Th>
                {projects.map(renderProjectId)}
            </Tr>
            <Tr role="row">
                <Th></Th>
                <Th>Serial Number</Th>
                {projects.map(renderSerialNumber)}
            </Tr>
            <Tr role="row">
                <Th></Th>
                <Th>Delivery Year</Th>
                {projects.map(renderDeliveryYear)}
            </Tr>
            <Tr role="row"></Tr>
            <Tbody role="table">
                {optionsGroups.map(optionsGroup => (
                    optionsGroup.length ?
                    <>
                        <Tr role="row">
                            <Td></Td>
                            <Th style={{ color: "red" }}>{optionsGroup[0]?.type.toUpperCase()}</Th>
                            {projects.map(renderEmptyCell)}
                        </Tr>
                        {optionsGroup.map(renderCheckedRow)}
                    </> :
                    null
                ))}
            </Tbody>
        </Table>
    );
};

export default Standards;