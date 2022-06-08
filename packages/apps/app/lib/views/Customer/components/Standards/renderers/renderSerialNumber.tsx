import { ReactNode } from "react";
import { Project } from "@proficient/types";
import { StandardsTableHeader as Th } from "../Standards.styles";

/**
 * @function renderSerialNumber
 * @param {Project} project project
 * @returns {ReactNode} table header
 */
export const renderSerialNumber = (project: Project): ReactNode => <Th key={project.id}>{project.serialNum}</Th>;