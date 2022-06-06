import type { EnhancedError } from "@proficient/exceptions";
import { HttpRequest, HttpResponse } from "@proficient/functions"; 
import { handleErrorResponse } from "./handleErrorResponse";
import { handleResponseData } from "./handleResponseData";
import type { WriteControllerDependencies } from "./types";

/**
 * @function 
 * @param {(userProfile: RequestBody) => Promise<ResponseBody>} updateProfile
 * @returns {(httpRequest: HttpRequest<RequestBody>) => Promise<HttpResponse<ResponseBody>>}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const makeWriteController = <WriteIterator extends Function, RequestBody, ResponseBody>(
	{
		interactor,
		successStatusCode = 200,
		noErrorReturn = false
	}: WriteControllerDependencies<WriteIterator>
): ((httpRequest: HttpRequest<RequestBody>) => Promise<HttpResponse<ResponseBody | EnhancedError | null>>) => {
	/**
	 * @function updateProfileController
	 * @param {HttpRequest<RequestBody>} httpRequest 
	 * @returns {Promise<HttpResponse<ResponseBody | null>}
	 */
	const writeController = async (
		httpRequest: HttpRequest<RequestBody>
	): Promise<HttpResponse<ResponseBody | EnhancedError | null>> => {
		try {
			const body = await interactor(httpRequest.body);

			return handleResponseData(body, successStatusCode);
		} catch (e) {
			return handleErrorResponse(e as EnhancedError, noErrorReturn);
		}
	};

	return writeController;
};

export default makeWriteController;