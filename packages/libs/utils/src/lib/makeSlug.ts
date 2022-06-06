
/**
 * Create a slug from the customer name
 * @param {string} customer 
 * @returns {string}
 */
export const makeSlug = (customer: string): string => {
    const [slug] = customer.split(" ");

    return slug.toLowerCase();
};