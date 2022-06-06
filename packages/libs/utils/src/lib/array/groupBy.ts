
/**
 * Group data by the provided key
 * @function groupBy
 * @param {T[]} data data to group
 * @param {keyof T} key key of prop to group data by
 * @returns {T[][]} nested array of grouped data
 */
export const groupBy = <T>(data: T[], key: keyof T): T[][] => {
    const groups = data.reduce((storage, item) => {
        const group = item[key] as any;

        storage[group]  ||= [];

        storage[group].push(item);

        return storage;
    }, {} as Record<string, T[]>);

    return Object.values(groups);
};