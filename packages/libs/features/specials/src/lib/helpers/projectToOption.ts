import { Project, SelectOption } from "@proficient/types";

/**
 * @function
 * @param {} 
 * @returns {}
 */
export const projectToOption = ({ id }: Project): SelectOption => ({
    label: id,
    value: id
});