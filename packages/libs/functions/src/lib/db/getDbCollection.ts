import { ServiceUnavailableError } from "@proficient/exceptions";
import { Collection } from "mongodb";
import { connectDb } from "./connectDb";
import { CollectionOptions } from "./types";

/**
 * Get the collection of the database instance
 * @function makeGetDbCollection
 * @param {CollectionOptions} db 
 * @returns {Promise<Collection<T>>}
 */
export const getDbCollection = async <T>(name: CollectionOptions): Promise<Collection<T>> => {
	try {
		const db = await connectDb();

		return db.collection(name);
	} catch (e) {
		// TODO: Log error
		// logError(e.message);
		throw new ServiceUnavailableError({ message: "Service is currently unavailable" });
	}
};