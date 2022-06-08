import { Project, ProjectInfo } from "@proficient/types";

import { httpClient } from "../../config";
import { useResourcesMutator } from "../../hooks";

import { useProjectsRepo } from "./useProjectRepo";


export const useProjectsMutator = (url: string, key: string | null) => {
    const { fetchProjects } = useProjectsRepo({
        httpClient,
        url,
        name: "PROJECTS_ERROR"
    });

    const {
        readError: error,
        data
    } = useResourcesMutator<ProjectInfo, Project>(fetchProjects, key);

    return {
        data,
        error,
        isLoading: !data && !error,
    };
};