import type { EnhancedError } from "@proficient/exceptions";
import { errorLogger as logger, HttpResponse } from "@proficient/functions";

/**
 * @function handleErrorResponse
 * @param {any} e error object extending from Error class
 * @param {boolean} noErrorReturn state whether to prevent a error response from being sent to the client
 * @returns {HttpResponse<ResponseBody | EnhancedError | null>}
 */
export const handleErrorResponse = <ResponseBody>(
	e: EnhancedError,
	noErrorReturn = false
): HttpResponse<ResponseBody | EnhancedError | null> => {
	// Skip repeat log if status code is 500
	if (e.statusCode < 500)
		logger.warn(e);
	else if (e.statusCode > 500)
		logger.error(e);

	delete e.stack;

	return {
		statusCode: e.statusCode,
		body: noErrorReturn ? null : e
	};
};