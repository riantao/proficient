import { ReactNode } from "react";
import { CustomerOption, Project } from "@proficient/types";
import { makeRenderCheckedRowData } from "./makeRenderCheckedRowData";
import { 
    StandardsTableRow as Tr, 
    StandardsTableData as Td
} from "../Standards.styles";

/**
 * 
 * @param projects 
 * @returns {(option: CustomerOption) => ReactNode}
 */
export const makeRenderOptionRow = (projects: Project[]) => {
    const renderOptionRow = (option: CustomerOption): ReactNode => {
        const renderCheckedRowData = makeRenderCheckedRowData(option);

        return (
            <Tr key={option.id} role="row">
                <Td>{option.id}</Td>
                <Td>{option.title}</Td>
                {projects.map(renderCheckedRowData)}
            </Tr>
        );
    };
  
    return renderOptionRow;
};