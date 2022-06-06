/**
 * Replace the element in an array at the specified index
 * @function replaceElemAtIndex
 * @param {T[]} arr array to perform element swap
 * @param {T} newValue new value of element
 * @param {number} index index of element to replace
 * @returns {T[]} array with replaced element
 */
 export const replaceElemAtIndex = <T>(arr: T[], newValue: T, index = 0): T[] =>
 [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];