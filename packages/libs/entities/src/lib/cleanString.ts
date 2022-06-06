import sanitizer from "validator";

/**
 * @function cleanString
 * @param {} text 
 * @returns {}
 */
export const cleanString = (text: string) => 
    typeof text === "string" ? 
        sanitizer.escape(text).trim() :
        text;