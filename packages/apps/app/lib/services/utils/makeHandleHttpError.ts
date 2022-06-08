import type { AxiosError } from "axios";
import type { HttpError } from "../types";

/**
 * @function makeHandleHttpError
 */
export const makeHandleHttpError = (name: string) => {
	const handleHttpError = (e: AxiosError<HttpError>): HttpError => {
		if (e.response)
			return {
				message: e.response.data.message,
				statusCode: e.response.status,
				name
			};
		if (e.request)
			return {
				message: e.request.data.message,
				statusCode: e.request.status,
				name
			};

		return {
			name,
			message: "An internal server error occurred",
			statusCode: 500
		};
	};

	return handleHttpError;
};