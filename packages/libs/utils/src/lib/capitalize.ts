/**
 * Capitalize first character of string
 * @function capitalize
 * @param {string} text string of text
 * @returns {string} capitalized text
 */
export const capitalize = (text: string): string =>
    text.charAt(0).toUpperCase() + 
    text.substring(1).toLowerCase();