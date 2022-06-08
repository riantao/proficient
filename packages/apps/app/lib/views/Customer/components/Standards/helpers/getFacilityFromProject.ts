import { CustomerFacility, Project } from "@proficient/types";


/**
 * @function getFacilityFromProject
 * @param facilities 
 * @returns {}
 */
export const getFacilityFromProject = (facilities: CustomerFacility[]) => {
    /**
     * @function projectToFacility
     * @param {Project} project 
     * @returns {CustomerFacility}
     */
    const projectToFacility = (project: Project): CustomerFacility => {
        const facility = facilities.find(facility => project.details.address.includes(facility.street));
        
        return facility as CustomerFacility;
    };

    return projectToFacility;
};