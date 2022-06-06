import * as dotenv from "dotenv";

// import { ConfigurationError } from "@proficient/exceptions";

import { makeHandleRepoError } from "./makeHandleRepoError";

export type { EntityRepo, RepoDependencies } from "./types.d";

dotenv.config();

const { SENDGRID_API_KEY, AUTH_EMAIL, SUPPORT_EMAIL } = process.env;

// if (!SENDGRID_API_KEY)
	// throw new ConfigurationError("SENDGRID_API_KEY is undefined");

// if (!AUTH_EMAIL)
	// throw new ConfigurationError("AUTH_EMAIL is undefined");

// if (!SUPPORT_EMAIL)
	// throw new ConfigurationError("SUPPORT_EMAIL is undefined");

export const handleRepoError = makeHandleRepoError({
	apiKey: SENDGRID_API_KEY,
	from: SUPPORT_EMAIL,
	to: AUTH_EMAIL
});