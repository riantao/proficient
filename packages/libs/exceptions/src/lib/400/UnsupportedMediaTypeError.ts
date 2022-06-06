// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "The server received a media type it cannot process";

// FIXME: Can't extend from parent class because of TypeScript prototype error

export default class UnsupportedMediaTypeError {//extends HttpError {
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
		// 	name: "UnsupportedMediaTypeError",
		// 	message,
		// 	statusCode: 415
		// });
		const { stack } = new Error();

		this.id = id;
		this.message = message;
		this.name = "UnsupportedMediaTypeError";
		this.statusCode = 415;
		this.stack = stack;
	}
}