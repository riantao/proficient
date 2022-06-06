import { Db, MongoClient, MongoClientOptions } from "mongodb";
import { ConfigurationError, ServiceUnavailableError } from "@proficient/exceptions";
import { errorLogger, internalLogger } from "../logging";

const { DB_URL } = process.env;

if (!DB_URL)
	throw new ConfigurationError("DB_URL is undefined");

let cachedDb: Db;
let client: MongoClient;

/**
 * Establish connection to database
 * @param {string | undefined} url db connection string
 * @param {MongoClientOptions | undefined} opts db client config options
 * @returns {Promise<Db>} resolved database instance
 */
export const connectDb = async (url = DB_URL, opts?: MongoClientOptions): Promise<Db> => {
	client = new MongoClient(url, opts);

	client.on("open", () => {
		console.log("Mongodb client connected...");
		internalLogger.info("Mongodb client connected...");
	});

	if (cachedDb)
		return cachedDb;

	try {
		await client.connect();

		await client.db("admin").command({ ping: 1 });

		const db = client.db();
		cachedDb = db;

		return db;
	} catch (e) {
		errorLogger.error(e);
		throw new ServiceUnavailableError({ id: "MONGO_ERROR", message: e.message });
	}
};

export default connectDb;