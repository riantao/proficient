import { ReactNode } from "react";
import { Project } from "@proficient/types";
import { StandardsTableHeader as Th } from "../Standards.styles";

/**
 * @function renderProjectId
 * @param {Project} project 
 * @returns {ReactNode}
 */
export const renderProjectId = (project: Project): ReactNode => <Th key={project.id}>{project.id}</Th>;