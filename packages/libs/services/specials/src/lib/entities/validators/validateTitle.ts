import { ErrorDetails } from "@proficient/exceptions";

/**
 * @function validateTitle
 * @param {string} title 
 * @returns {string | null}
 */
export const validateTitle = (title: string): ErrorDetails | null => {
    if(!title)
        return { message: "Title is a required field" };

    return null;
};