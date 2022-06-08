/**
 * @function truncateDescription
 * @param {string} description special description 
 * @returns {string} truncated description
 */
export const truncateDescription = (description:string): string => 
    description.slice(0, 97) + "..."; 