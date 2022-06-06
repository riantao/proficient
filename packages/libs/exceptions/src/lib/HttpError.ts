import { EnhancedError } from "./types";

export default class HttpError extends Error {
	id?: string;
	statusCode: number;

	constructor({
		id,
		message,
		name = "ServerError",
		statusCode = 500
	}: EnhancedError) {
		super(message);
		Object.setPrototypeOf(this, HttpError.prototype);

		this.name = name;
		this.id = id;
		this.statusCode = statusCode;
	}
}