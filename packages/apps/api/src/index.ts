import { Server } from "http";
import dotenv from "dotenv";

import {
	connectDb,
	buildMakeCollection,
	collectionParams,
	errorLogger
} from "@proficient/functions";

import app from "./app";

dotenv.config();

const { NODE_ENV, HOST, PORT } = process.env;
const port = PORT ? parseInt(PORT) : 3333;

let server: Server | undefined = undefined;

const start = async () => {
	try {
		// Resolve before starting server
		const db = await connectDb();

		const makeDbCollection = buildMakeCollection(db);

		await Promise.all(collectionParams.map(makeDbCollection));

		server = app.listen(port, () => console.log(`${NODE_ENV} server running at ${HOST}:${port}/`));
	} catch (e) {
		errorLogger.error(e);
		server?.close(err => console.error(`Error causing server shutdown: ${err}`));
	}
};

export default start();