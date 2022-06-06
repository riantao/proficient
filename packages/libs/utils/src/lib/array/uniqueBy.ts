/**
 * Remove non-unique values from array via the provided predicate
 * @function uniqueBy
 * @param {T[]} array array
 * @param {(b: T) => keyof T} predicate function targeting unique property
 * @returns {T[]} array containing unique values
 */
 export const uniqueBy = <T>(array: T[], predicate: (value: T, index: number, array: T[]) => string) =>
 Object.values(
     array.reduce(
         (acc, value, index) => {
             acc[predicate(value, index, array)] = value;
             return acc;
         },
         {} as Record<string, T>
     )
 );