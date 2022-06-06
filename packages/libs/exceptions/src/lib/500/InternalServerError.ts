// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "The server encountered an error and could not process your request";

export default class InternalServerError {//extends HttpError {
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
		// 	name: "InternalServerError",
		// 	message,
		// 	statusCode: 500
		// });
		const { stack } = new Error();

		this.id = id;
		this.message = message;
		this.name = "InternalServerError";
		this.statusCode = 500;
		this.stack = stack;
	}
}