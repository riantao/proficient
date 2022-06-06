import { makeDao } from "@proficient/functions";

import { makeProjectsRepo } from "./makeProjectsRepo";

export const projectsRepo = makeProjectsRepo({
    dao: makeDao("projects")
});