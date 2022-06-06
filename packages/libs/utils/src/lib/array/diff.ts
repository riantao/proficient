
/**
 * Return the difference of two arrays
 * @function diff
 * @param {T[]} array first array
 * @param {T[]} comparedTo second array
 * @returns {T[]} difference of the two arrays
 */
export const diff = <T>(array: T[], comparedTo: T[]): T[] =>
    array.filter(value => !comparedTo.includes(value));