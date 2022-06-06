/**
 * Remove non-unique values from array
 * @function unique
 * @param a array
 * @returns {T[]} array containing unique values
 */
 export const unique = <T>(a: T[]): T[] =>
 [...new Set(a)];