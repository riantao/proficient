import type { EnhancedError } from "@proficient/exceptions";
import { HttpRequest, HttpResponse } from "@proficient/functions";

import type { DefaultParamDict, ReadControllerDependencies } from "./types.d";

import { handleErrorResponse } from "./handleErrorResponse";
import { handleResponseData } from "./handleResponseData";

/**
 * @function makeReadController
 * @param {(id: string) => Promise<Document | null>} getInteractor
 */
export const makeReadController = <
	ResponseBody,
	RequestParams = DefaultParamDict,
	// eslint-disable-next-line @typescript-eslint/ban-types
	Interactor extends Function = (id: keyof RequestParams, query: RequestParams) => ResponseBody,
	>({
		interactor,
		successStatusCode = 200,
		noErrorReturn = false
	}: ReadControllerDependencies<Interactor>): (
		(httpRequest: HttpRequest<Record<string, never>, RequestParams>) =>
			Promise<HttpResponse<ResponseBody | EnhancedError | null>>
	) => {
	/**
	 * @function readController
	 * @param {HttpRequest} httpRequest 
	 * @returns {Promise<HttpResponse<ResponseBody | null>>}
	 */
	const readController = async (
		httpRequest: HttpRequest<Record<string, never>, RequestParams>
	): Promise<HttpResponse<ResponseBody | EnhancedError | null>> => {
		try {
			const body = await interactor(httpRequest.query);

			return handleResponseData(body, successStatusCode);
		} catch (e) {
			return handleErrorResponse(e as EnhancedError, noErrorReturn);
		}
	};

	return readController;
};

export default makeReadController;