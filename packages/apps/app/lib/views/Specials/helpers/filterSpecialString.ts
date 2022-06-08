import { Special } from "@proficient/types";

/**
 * @function filterSpecial
 * @param {keyof Special} key 
 * @param {string} filter 
 * @returns {(special: Special) => boolean}
 */
export const filterSpecialString = (key: keyof Special, filter: string) => {
    /**
     * @function filterPredicate
     * @param {Special} special 
     * @returns {boolean}
     */
    const filterPredicate = (special: Special): boolean => 
        (special[key] as string).includes(filter); 

    return filterPredicate;
};