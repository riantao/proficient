import { ErrorDetails } from "@proficient/exceptions";

/**
 * @function handleValidationResponse
 * @param {(ErrorDetails | null)[]} errors 
 * @returns {ErrorDetails | null}
 */
export const handleValidationResponse = (errors: (ErrorDetails | null)[]): ErrorDetails | null =>
	errors.find(Boolean) ?? null;

export default handleValidationResponse;