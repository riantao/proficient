import { ReactNode } from "react";

import { CustomerFacility, CustomerOption, Project } from "@proficient/types";
import { uniqueBy, groupBy } from "@proficient/utils";

import { CustomerStandardsProps } from "../Standards.d";
import { OPTION_TYPES } from "../constants";
import { 
    getOptionsFromProject, 
    getOptionsOfType, 
    getCustomerOptionFromProjectOption,
    getFacilityFromProject
} from "../helpers";
import { 
    makeRenderOptionRow, 
    renderEmptyCell, 
    renderProjectId, 
    renderSerialNumber,
    renderDeliveryYear, 
    renderCustomerFacility,
    renderProjectConfig
} from "../renderers";

type CustomerStandardsDeps = CustomerStandardsProps;

interface CustomerStandardProps {
    readonly optionsGroups: CustomerOption[][];
    readonly facilitiesByProject: CustomerFacility[][];
    readonly projectsByConfig: Project[][];
    readonly renderCheckedRow: (option: CustomerOption) => ReactNode;
    readonly renderCustomerFacility: (facilityGroup: CustomerFacility[]) => ReactNode;
    readonly renderDeliveryYear: (project: Project, index: number) => ReactNode;
    readonly renderEmptyCell: () => ReactNode;
    readonly renderProjectConfig: (projectGroup: Project[]) => ReactNode;
    readonly renderProjectId: (project: Project) => ReactNode;
    readonly renderSerialNumber: (project: Project) => ReactNode;
}

export const useCustomerStandards = ({
    projects,
    customer
}: CustomerStandardsDeps): CustomerStandardProps => {
    const renderCheckedRow = makeRenderOptionRow(projects);

    // Get options of each type from projects
    // Use to create second table rows 
    const optionsGroups = OPTION_TYPES.map(
        type => uniqueBy( // Filter all duplicate options  
                // Map projects to each unique option
                projects
                    .flatMap(getOptionsFromProject)
                    .map(getCustomerOptionFromProjectOption(projects)),
                option => option.id // Return each unique option once
            )
            .filter(getOptionsOfType(type))
    );

    // Create an array of grouped facilities that match the projects facility
    const facilitiesByProject = groupBy(
        projects
            .map(getFacilityFromProject(customer.facilities)) // Return the facility of the project
            .filter(Boolean), // Filter out any undefined
        "city"
    );
    
    const projectsByConfig = groupBy(
        projects,
        "title"
    );

    return {
        optionsGroups,
        facilitiesByProject,
        projectsByConfig,
        renderCheckedRow,
        renderDeliveryYear,
        renderEmptyCell,
        renderProjectConfig,
        renderProjectId,
        renderSerialNumber,
        renderCustomerFacility
    };
};