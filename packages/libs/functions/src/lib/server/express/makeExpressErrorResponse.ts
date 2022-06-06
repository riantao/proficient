import { Response } from "express";

import { ServerError } from "@proficient/exceptions";

export const makeExpressErrorResponse = (res: Response) => {
	const expressErrorResponse = <Error extends ServerError>({ statusCode = 500, message }: Error) => {
		res.type("json");
		res.status(statusCode);

		if (!message)
			return res.end();
		else
			return res.json(message);
	};

	return expressErrorResponse;
};