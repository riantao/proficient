import { Project } from "@proficient/types";
import { ReactNode } from "react";
import { StandardsTableHeader as Th  } from "../Standards.styles";

/**
 * 
 * @function renderDeliveryYear
 * @param {Project}
 * @returns {ReactNode}
 */
export const renderDeliveryYear = ({ id, schedule }:Project, index: number): ReactNode => (
    <Th key={id}>
        {schedule.exw.getFullYear() - index}
    </Th>
);