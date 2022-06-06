// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultError = "This resource has not been implemented yet";

export default class NotImplementedError {//extends HttpError {
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
		// 	name: "NotImplementedError",
		// 	message,
		// 	statusCode: 501,
		// });

		const { stack } = new Error();

		this.id = id;
		this.message = message;
		this.name = "NotImplementedError";
		this.statusCode = 501;
		this.stack = stack;
	}
}