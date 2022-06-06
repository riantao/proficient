import type { Collection, Db } from "mongodb";
import type { CollectionDependencies } from "./types";

/**
 * @function buildMakeCollection
 * @param {Db} db 
 * @returns {(deps: CollectionDependencies) => Promise<Collection<T>>}
 */
export const buildMakeCollection = (db: Db): ((deps: CollectionDependencies) => Promise<Collection>) => {
	/**
	 * @function makeCollection
	 * @param {CollectionDependencies} deps
	 * @returns {Promise<Collection>}
	 */
	const makeCollection = async ({
		name,
		validator,
		indexes = [{ key: { id: 1 }, name: "id_1" }]
	}: CollectionDependencies): Promise<Collection> => {
		/**
		 * Compare Check if new `name` matches an existing `collectionName`
		 * @param {Collection} collection
		 * @returns {boolean} true if `name` matches `collectionName`
		 */
		const checkExistingCollection = ({ collectionName }: Collection): boolean =>
			collectionName === name;

		const existingCollections = await db.collections();
		let collection = existingCollections.find(checkExistingCollection);

		if (!collection)
			collection = await db.createCollection(name, { validator });

		collection.createIndexes(indexes);

		return collection;
	};

	return makeCollection;
};