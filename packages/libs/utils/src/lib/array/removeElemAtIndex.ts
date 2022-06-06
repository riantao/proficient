
/**
 * Remove the element of an array at the specified index
 * @function removeElemAtIndex
 * @since v1.0.0
 * @param {T[]} arr array to perform element removal
 * @param {number} index index of element
 * @returns {T[]} array with element at index removed
 */
 export const removeElemAtIndex = <T>(arr: T[], index = 0): T[] =>
 [...arr.slice(0, index), ...arr.slice(index + 1)];