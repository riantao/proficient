import { Request, Response } from "express";

import { makeExpressResponse } from "./makeExpressResponse";
import { makeExpressErrorResponse } from "./makeExpressErrorResponse";
import type { HttpPreResponse, HttpRequest, HttpResponse } from "../types";

export const makeExpressCallback = <
	ResponseBody,
	RequestBody,
	RequestParams,
	RequestQuery,
	ResponseLocals
>(
	controller: (
		httpRequest: HttpRequest<RequestBody, RequestParams, RequestQuery>,
		httpResponse: HttpPreResponse
	) => Promise<HttpResponse<ResponseBody>>
): (
		(
			req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery, ResponseLocals>,
			res: Response<ResponseBody>
		) => Promise<void | Response<ResponseBody>>
	) => {
	const expressController = (
		req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
		res: Response<ResponseBody>
	): Promise<void | Response<ResponseBody>> => {
		if (!(req.body instanceof Object))
			res.status(400).json("Request body must be an object" as unknown as ResponseBody);

		const expressResponse = makeExpressResponse(res);
		const expressError = makeExpressErrorResponse(res);

		return controller(req, res)
			.then(expressResponse)
			.catch(expressError);
	};

	return expressController;
};


export default makeExpressCallback;