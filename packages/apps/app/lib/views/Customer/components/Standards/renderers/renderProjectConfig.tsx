import { ReactNode } from "react";
import { Project } from "@proficient/types";
import { StandardsTableHeader as Th } from "../Standards.styles";

/**
 * @function renderProjectConfig
 * @param {Project} project 
 * @returns {ReactNode}
 */
export const renderProjectConfig = (projectGroup: Project[]): ReactNode => (
    <Th colSpan={projectGroup.length} key={projectGroup[0]?.title}>
        {projectGroup[0]?.title}
    </Th>
);