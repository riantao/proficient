// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "There was a conflict error that prevented the server from processing this request";

// FIXME: Can't extend from parent class because of TypeScript prototype error

export default class ConflictError {// extends HttpError {
	id?: string;
	message: string;
	name: string;
	statusCode: number;
	stack?: string;

	constructor({
		id,
		message = defaultMessage
	}: ErrorDetails = { message: defaultMessage }) {
		// super({
		// 	id,
		// 	name: "ConflictError",
		// 	message,
		// 	statusCode: 409
		// });
		// Object.setPrototypeOf(this, ConflictError.prototype);
		const { stack } = new Error();
		this.id = id;
		this.message = message;
		this.name = "ConflictError";
		this.statusCode = 409;
		this.stack = stack;
	}
}