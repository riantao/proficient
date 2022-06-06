import { Filter } from "mongodb";

import { handleRepoError } from "@proficient/adapters";
import { Project } from "@proficient/types";

export const makeProjectsRepo = ({
    dao
}) => {
    const findBy = async (filter:Filter<Project>): Promise<Project[] | null> => {
        try {
            const projects = await dao.findAll(filter);

            if(!projects.length)
                return null;

            return projects;
        } catch(e) {   
            return handleRepoError(e);
        }
    };

    return {
        findBy
    };
};