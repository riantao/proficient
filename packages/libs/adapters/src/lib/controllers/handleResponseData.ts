import { HttpResponse } from "@proficient/functions";

/**
 * @function handleResponseData
 * @param {ResponseData} data response payload
 * @param {number} successStatusCode status code for a successful request
 * @returns {HttpResponse<ResponseData | null>}
 */
export const handleResponseData = <ResponseData>(
	data: ResponseData,
	successStatusCode: number
): HttpResponse<ResponseData | null> => {
	if (!data)
		return {
			statusCode: 204,
			body: data
		};

	return {
		statusCode: successStatusCode,
		body: data
	};
};