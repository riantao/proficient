import { ReactNode } from "react";
import { CustomerOption, Project } from "@proficient/types";

import { StandardsTableData as Td } from "../Standards.styles";

/**
 * Render the table cell that shows whether a project applies that option
 * @function makeRenderCheckedRowData
 * @param {CustomerOption} option 
 * @returns {(project: Project) => ReactNode}
 */
export const makeRenderCheckedRowData = (option: CustomerOption) =>{
    const renderCheckedRowData = (project: Project): ReactNode => {
        let content: string | null = null;

        if(option.projectIds.includes(project.id))
            content = "x";

        return <Td key={project.id}>{content}</Td>
    };

    return renderCheckedRowData;
};