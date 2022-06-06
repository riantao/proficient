import { CustomerOption, Project, ProjectOption } from "@proficient/types";

/**
 * 
 * @param projects 
 * @returns {(option: ProjectOption) => CustomerOption}
 */
export const getCustomerOptionFromProjectOption = (projects: Project[]) => {
    /**
     * Get the projects using this option and add it as a list to the option object
     * @param {ProjectOption} option current option
     * @returns {CustomerOption} customer option
     */
    const projectsUsingOption = ({ id, title, type, description }: ProjectOption): CustomerOption => {
        const projectIds: string[] = [];

        // Loop through each project
       projects.forEach(project => {
        // Loop through each project's option and check if the iterated option matches this option
            project.options.forEach(option => {
                if(option.id === id)
                    // Add that project id to a new projectIds array for this option
                    projectIds.push(project.id);
            });
       });
        
        // Return spread option with new projectIds array
        const customerOption = {
            id, 
            title, 
            type, 
            description,
            projectIds
        };

        return customerOption;
    };

    return projectsUsingOption;
};