// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "This page requires you to be authenticated before gaining access";

// FIXME: Can't extend from parent class because of TypeScript prototype error

export default class UnauthorizedError {//extends HttpError {
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
		// 	name: "UnauthorizedError",
		// 	message,
		// 	statusCode: 401
		// });
		const { stack } = new Error();

		this.id = id;
		this.message = message;
		this.name = "UnauthorizedError";
		this.statusCode = 401;
		this.stack = stack;
	}
}