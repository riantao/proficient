import { useProjectsMutator } from "./useProjectMutator";

const KEY = "/projects";

/**
 * @function useProjects
 * @param {} url 
 * @returns {}
 */
export const useProjects = (url: string | null = KEY) => 
    useProjectsMutator(KEY, url);