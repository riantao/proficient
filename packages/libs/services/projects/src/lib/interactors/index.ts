import { makeFetchProjects } from "./makeFetchProjects";
import { sanitizeProjectsQuery } from "./sanitizeProjectsQuery";
import { projectsRepo } from "../repo";

export const fetchProjects = makeFetchProjects({
    repo: projectsRepo,
    querySanitizer: sanitizeProjectsQuery
})