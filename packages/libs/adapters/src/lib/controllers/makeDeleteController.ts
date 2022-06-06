import type { EnhancedError } from "@proficient/exceptions";
import { HttpRequest, HttpResponse } from "@proficient/functions";
import { handleErrorResponse } from "./handleErrorResponse";
import { handleResponseData } from "./handleResponseData";
import type { WriteControllerDependencies } from "./types";

/**
 * @function makeDeleteController
 * @param {(id: string) => Promise<boolean>} deleteInteractor
 * @returns {(httpRequest: HttpRequest) => Promise<HttpResponse<null>>}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const makeDeleteController = <Interactor extends Function>({
	interactor,
	successStatusCode = 204,
	noErrorReturn = false
}: WriteControllerDependencies<Interactor>): ((httpRequest: HttpRequest) => Promise<HttpResponse<EnhancedError | null>>) => {
	/**
	 * @function destroyUserController
	 * @param {HttpRequest} httpRequest
	 * @returns {Promise<HttpResponse<null>> }
	 */
	const deleteController = async (httpRequest: HttpRequest): Promise<HttpResponse<EnhancedError | null>> => {
		try {
			const data = await interactor(httpRequest.params.id);

			return handleResponseData(data ?? null, successStatusCode);
		} catch (e) {
			return handleErrorResponse(e as EnhancedError, noErrorReturn);
		}
	};

	return deleteController;
};

export default makeDeleteController;