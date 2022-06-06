import { SpecialsFetchInteractorDependencies } from "./types";

export const makeFetchSpecials = ({
    repo,
    querySanitizer
}: SpecialsFetchInteractorDependencies) => {
    /**
     * @function 
     * @param query 
     * @returns 
     */
    const fetchSpecials = async (query: Record<string, any>) => {
        const filter = querySanitizer(query);

        const specials = await repo.findBy(filter); 
    
        return specials;
    };

    return fetchSpecials;
};