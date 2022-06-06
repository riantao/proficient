import { ErrorDetails } from "../types";

const defaultError = "This service is currently unavailable. Please try again later";

export default class ServiceUnavailableError {//extends HttpError {
	id?: string;
	message: string;
	name: string;
	statusCode: number;
	stack?: string;

	constructor({
		id,
		message = defaultError
	}: ErrorDetails = { message: defaultError }) {
		// super({
		// 	id,
		// 	name: "ServiceUnavailableError",
		// 	message,
		// 	statusCode: 503,
		// });

		const { stack } = new Error();

		this.id = id;
		this.message = message;
		this.name = "ServiceUnavailableError";
		this.statusCode = 503;
		this.stack = stack;
	}
}