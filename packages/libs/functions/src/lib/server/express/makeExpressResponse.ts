import { Response } from "express";
import type { HttpResponse } from "../types";
import { hasNoResponseBody } from "../hasNoResponseBody";

/**
 * @function makeSendHttpResponse
 * @param {Response} res 
 * @returns {(httpResponse: HttpResponse<ResponseBody>) => void}
 * @private
 */
export const makeExpressResponse = <ResponseBody>(
	res: Response<ResponseBody>
): ((httpResponse: HttpResponse<ResponseBody>) => void | Response<ResponseBody>) => {
	const expressResponse = ({
		body,
		headers,
		statusCode = 500
	}: HttpResponse<ResponseBody>): void | Response<ResponseBody> => {
		if (headers)
			res.set(headers);

		res.type("json");
		res.status(statusCode);

		if (hasNoResponseBody(body))
			return res.end();
		else
			return res.json(body);
	};

	return expressResponse;
};