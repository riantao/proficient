import { Option, Project, ProjectOption } from "@proficient/types";

/**
 * Add project id to the option the project belongs to
 * @function getOptionsFromProject
 * @param {Project} project project
 * @returns {Option[]} options
 */
export const getOptionsFromProject = (project: Project): ProjectOption[] => {
    const optionToCustomerOption = (option: Option) => ({ 
        ...option, 
        projectId: project.id 
    });
    
    const projectOptions = project.options.map(optionToCustomerOption);

   return projectOptions;
};