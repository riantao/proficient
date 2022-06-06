// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "The server received data that is perceived to be malformed, invalid, or deceptive";

// FIXME: Can't extend from parent class because of TypeScript prototype error

export default class BadRequestError {//extends HttpError {
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
		// 	message,
		// 	name: "BadRequestError",
		// 	statusCode: 400
		// });
		// Object.setPrototypeOf(this, BadRequestError.prototype);
		const { stack } = new Error();
		this.id = id;
		this.message = message;
		this.name = "BadRequestError";
		this.statusCode = 400;
		this.stack = stack;
	}
}