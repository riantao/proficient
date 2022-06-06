import { SelectOption, Special } from "@proficient/types";

/**
 * Return a predicate that filters a special by it's projects
 * @function filterSpecialByProject
 * @param {readonly SelectOption[]} options 
 * @returns {(special: Special) => boolean}
 */
export const filterSpecialByProject = (options: readonly SelectOption[]) => {
    /**
     * @function byProject
     * @param {Special} 
     * @returns {boolean}
     */
    const byProject = ({ projects }: Special): boolean => {
        if(options.length === 0)
            return true;

        return options.every(option => projects.some(project => option.value === project.id));
    }

    return byProject;
};