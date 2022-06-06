/**
 * Check whether operation will occur on the client-side
 * @function isClientSide 
 * @returns {boolean} true if client-side
 */
export const isClientSide = (): boolean => 
    typeof window !== "undefined";