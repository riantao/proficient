// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "This page or resource no longer exists because it has either been moved or deleted";

// FIXME: Can't extend from parent class because of TypeScript prototype error

export default class GoneError {//extends HttpError {
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
		// 	name: "GoneError",
		// 	message,
		// 	statusCode: 410
		// });

		this.id = id;
		this.message = message;
		this.name = "GoneError";
		this.statusCode = 410;
	}
}