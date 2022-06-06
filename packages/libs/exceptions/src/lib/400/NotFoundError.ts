// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "This page or resource was not found on the server";

export default class NotFoundError {// extends HttpError {
	id?: string;
	name: string;
	message: string;
	statusCode: number;
	stack?: string;

	constructor({ id, message = defaultMessage }: ErrorDetails = { message: defaultMessage }) {
		// super({
		// 	id,
		// 	message,
		// 	name: "NotFoundError",
		// 	statusCode: 404
		// });
		// Object.setPrototypeOf(this, NotFoundError.prototype);
		const { stack } = new Error();

		this.id = id;
		this.message = message;
		this.name = "NotFoundError";
		this.statusCode = 404;
		this.stack = stack;
	}
}