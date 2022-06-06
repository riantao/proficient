import { makeReadController } from "@proficient/adapters";

import { fetchProjects } from "../interactors";

export const fetchProjectsController = makeReadController({
    interactor: fetchProjects
});