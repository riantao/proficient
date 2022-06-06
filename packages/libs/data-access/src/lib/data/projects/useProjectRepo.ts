import { Project, ProjectInfo } from "@proficient/types";

import { useResourcesRepo } from "../../hooks";
import { ServicesDependencies } from "../../types";


export const useProjectsRepo = ({
    httpClient,
    name,
    url,
    config
}: ServicesDependencies) => {
    const {
		error,
		fetchResource
	} = useResourcesRepo<ProjectInfo, Project>({
		httpClient,
		name,
		url,
		config
	});

    return {
        error,
        fetchProjects: fetchResource,
    };
};