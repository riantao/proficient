/**
 * 
 * @param body 
 * @param statusCode 
 * @returns 
 */
 export const hasNoResponseBody = <ResponseBody>(body: ResponseBody): boolean => {
	if (!body)
		return true;

	if (typeof body === "string")
		return body.length === 0;

	if (Array.isArray(body))
		return false;

	if ((body instanceof Object))
		return false;

	return Object.keys(body).length === 0;
};