// import HttpError from "../HttpError";
import { ErrorDetails } from "../types";

const defaultMessage = "This page or resource requires a paid subscription to access";

// FIXME: Can't extend from parent class because of TypeScript prototype error

export default class PaymentRequiredError {//extends HttpError {
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
		// 	name: "PaymentRequiredError",
		// 	message,
		// 	statusCode: 402
		// });

		const { stack } = new Error();
		this.id = id;
		this.message = message;
		this.name = "PaymentRequiredError";
		this.statusCode = 402;
		this.stack = stack;
	}
}