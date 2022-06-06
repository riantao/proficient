/**
 * @function makeFetchProjects
 * @param {}
 * @returns {}
 */
export const makeFetchProjects = ({
    repo,
    querySanitizer
}) => {
    /**
     * 
     * @param query 
     * @returns 
     */
    const fetchProjects = async (query: Record<string, any>) => {
        const filter = querySanitizer(query);

        const projects = await repo.findBy(filter);

        return projects;
    };

    return fetchProjects;
};