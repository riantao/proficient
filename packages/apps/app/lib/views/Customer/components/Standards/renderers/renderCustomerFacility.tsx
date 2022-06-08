import { CustomerFacility } from "@proficient/types";
import { ReactNode } from "react";
import { StandardsTableHeader as Th } from "../Standards.styles";

/**
 * 
 * @function renderCustomerFacility
 * @param {CustomerFacility} facility 
 * @returns {ReactNode}
 */
export const renderCustomerFacility = (facilityGroup: CustomerFacility[]): ReactNode => (
    <Th colSpan={facilityGroup.length} key={facilityGroup[0]?.street}>
        {facilityGroup[0]?.city}, {facilityGroup[0]?.state}
    </Th>
);