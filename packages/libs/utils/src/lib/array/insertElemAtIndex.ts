/**
 * Insert new value into array at the specified index
 * @function insertElementAtIndex
 * @since v1.0.0
 * @param {T[]} arr array to add element to
 * @param {T} value value of inserted element
 * @param {number} index index of array where the elemenet will be inserted
 * @returns {T[]} array with inserted element
 */
export const insertElemAtIndex = <T>(arr: T[], value: T, index = arr.length): T[] =>
    [...arr.slice(0, index), value, ...arr.slice(index)];