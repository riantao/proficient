// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "The page or resource you're requesting access too is forbidden";

// FIXME: Can't extend from parent class because of TypeScript prototype error

export default class ForbiddenError {//extends HttpError {
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
		// 	message,
		// 	name: "ForbiddenError",
		// 	statusCode: 403
		// });
		// Object.setPrototypeOf(this, ForbiddenError.prototype);
		const { stack } = new Error();

		this.id = id;
		this.message = message;
		this.name = "ForbiddenError";
		this.statusCode = 403;
		this.stack = stack;
	}
}