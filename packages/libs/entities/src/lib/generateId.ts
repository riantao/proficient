import crypto from "crypto";

/**
 * Generate a unique hexidecimal id
 * @param {number} size 
 * @returns {string} id string
 */
export const generateId = (size = 16) => crypto
    .randomBytes(size)
    .toString("hex");