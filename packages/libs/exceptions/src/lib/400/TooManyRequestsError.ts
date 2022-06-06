// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "Too many requests have been made in a given amount of time. Please try again in a few minutes";

// FIXME: Can't extend from parent class because of TypeScript prototype error

export default class TooManyRequestsError {//extends HttpError {
	id?: string;
	name: string;
	message: string;
	statusCode: number;
	stack?: string;

	constructor({
		id,
		message = defaultMessage
	}: ErrorDetails = { message: defaultMessage }) {
		// super({
		// 	id,
		// 	name: "TooManyRequestsError",
		// 	message,
		// 	statusCode: 429
		// });
		const { stack } = new Error();

		this.id = id;
		this.message = message;
		this.name = "TooManyRequestsError";
		this.statusCode = 429;
		this.stack = stack;
	}
}