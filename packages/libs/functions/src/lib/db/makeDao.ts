import { UniqueId } from "@proficient/types";
import {
	Document,
	Filter,
	InsertOneResult,
	MatchKeysAndValues,
	ModifyResult,
	OptionalUnlessRequiredId,
	PullOperator,
	PushOperator,
	Sort,
	WithId,
	UpdateResult,
	OnlyFieldsOfType,
	DeleteResult,
	InsertManyResult,
} from "mongodb";
import { getDbCollection } from "./getDbCollection";
import { CollectionOptions, Dao, DaoQueryDependencies } from "./types";

/**
 * Create data access object that directly interacts with database
 * @function makeDao
 * @param {CollectionOptions} name name of database collection
 * @returns {Dao<T>} data access object
 */
export const makeDao = <T extends UniqueId>(name: CollectionOptions): Dao<T> => {
	const defaultOpts: DaoQueryDependencies = {
		sort: { id: 1 },
		limit: 9999
	};
	const defaultProjection = { _id: 0, __v: 0 };

	/**
	 * @function insertOne
	 * @param {OptionalUnlessRequiredId<T>} entity 
	 * @returns {Promise<InsertOneResult<T>>}
	 */
	const insertOne = async (entity: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>> => {
		const collection = await getDbCollection<T>(name);

		return await collection.insertOne(entity);
	};

	/**
	 * @function insertMany
	 * @param {} entities 
	 * @returns {}
	 */
	const insertMany = async (entities: OptionalUnlessRequiredId<T>[]): Promise<InsertManyResult<T>> => {
		const collection = await getDbCollection<T>(name);

		return await collection.insertMany(entities);
	};

	/**
	 * Fetch entities from database using the given id
	 * @function findById
	 * @param {string} id 
	 * @param {Document | undefined} projection
	 * @returns {Promise<WithId<T> | null> }
	 */
	const findById = async (id: string, projection: Document = defaultProjection): Promise<WithId<T> | null> => {
		const collection = await getDbCollection<T>(name);

		return await collection.findOne({ id } as Filter<T>, { projection });
	};

	/**
	 * Return documents based on the given filter 
	 * @function findBy
	 * @param {Filter<T>} filter 
	 * @param {Document} projection 
	 * @returns {Promise<WithId<T> | null>} 
	 */
	const findBy = async (filter: Filter<T> = {}, projection: Document = defaultProjection): Promise<WithId<T> | null> => {
		const collection = await getDbCollection<T>(name);

		return await collection.findOne(filter, { projection });
	};

	/**
	 * 
	 * @param {} filter 
	 * @param {} opts 
	 * @returns {}
	 */
	const findAll = async (
		filter: Filter<T> = {},
		{
			limit = defaultOpts.limit as number,
			projection,
			sort = defaultOpts.sort as Sort
		} = defaultOpts
	): Promise<WithId<T>[]> => {
		const collection = await getDbCollection<T>(name);

		const cursor = collection
			.find(filter, { projection })
			.sort(sort)
			.limit(limit);

		return await cursor.toArray();
	};

	/**
	 * Update document matching the given entity's id with the entity
	 * @function updateOne
	 * @param {T} entity 
	 * @returns {Promise<WithId<T>>}
	 */
	const updateOne = async (entity: T): Promise<WithId<T> | null> => {
		const collection = await getDbCollection<T>(name);

		const doc = await collection.findOneAndUpdate(
			{ id: entity.id } as Filter<T>,
			{ $set: entity }
		);

		return doc.value;
	};

	/**
	 * @function updateMany
	 * @param {Filter<T>} filter 
	 * @param {MatchKeysAndValues<T>} $set 
	 * @returns {Promise<Document | UpdateResult>}
	 */
	const updateMany = async (filter: Filter<T>, $set: MatchKeysAndValues<T>): Promise<Document | UpdateResult> => {
		const collection = await getDbCollection<T>(name);

		const doc = await collection.updateMany(filter, { $set });

		return doc;
	};

	/**
	 * @function deleteOne
	 * @param {string} id
	 * @returns {Promise<ModifyResult<T>>}
	 */
	const deleteOne = async (id: string): Promise<ModifyResult<T>> => {
		const collection = await getDbCollection<T>(name);

		return await collection.findOneAndDelete({ id } as Filter<T>);
	};

	/**
	 * @function deleteMany
	 * @param {Filter<T>} filter
	 * @returns {Promise<DeleteResult>}
	 */
	const deleteMany = async (filter: Filter<T>): Promise<DeleteResult> => {
		const collection = await getDbCollection<T>(name);

		return await collection.deleteMany(filter);
	};

	/**
	 * @function pushInner
	 * @param { Filter<T> | string} filter
	 * @param {PushOperator<T>} $push
	 * @returns 
	 */
	const pushInner = async (filter: Filter<T> | string, $push: PushOperator<T>): Promise<WithId<T> | null> => {
		const collection = await getDbCollection<T>(name);

		if (typeof filter === "string")
			filter = { id: filter } as Filter<T>;

		const doc = await collection.findOneAndUpdate(filter, { $push });

		return doc.value;
	};

	/**
	 * @function updateInner
	 * @param {Filter<T>} filter
	 * @param {MatchKeysAndValues<T>} $set 
	 * @returns {Promise<WithId<T> | null>}
	 */
	const updateInner = async (filter: Filter<T>, $set: MatchKeysAndValues<T>): Promise<WithId<T> | null> => {
		const collection = await getDbCollection<T>(name);

		const doc = await collection.findOneAndUpdate(filter, { $set });

		return doc.value;
	};

	const removeInner = async (
		filter: Filter<T>,
		$unset: OnlyFieldsOfType<T, unknown, "" | true | 1>
	): Promise<WithId<T> | null> => {
		const collection = await getDbCollection<T>(name);

		const doc = await collection.findOneAndUpdate(filter, { $unset });

		return doc.value;
	};

	const removeManyInner = async (
		filter: Filter<T>,
		$unset: OnlyFieldsOfType<T, unknown, "" | true | 1>
	): Promise<Document | UpdateResult> => {
		const collection = await getDbCollection<T>(name);

		const doc = await collection.updateMany(filter, { $unset });

		return doc;
	};

	/**
	 * @function pullInner
	 * @param {Filter<T> | string} filter 
	 * @param {PullOperator<T>} $pull 
	 * @returns {Promise<WithId<T> | null>}
	 */
	const pullInner = async (
		filter: Filter<T> | string,
		$pull: PullOperator<T>
	): Promise<WithId<T> | null> => {
		const collection = await getDbCollection<T>(name);

		if (typeof filter === "string")
			filter = { id: filter } as Filter<T>;

		const doc = await collection.findOneAndUpdate(filter, { $pull });

		return doc.value;
	};

	return {
		insertOne,
		insertMany,
		findById,
		findAll,
		findBy,
		updateOne,
		updateMany,
		deleteOne,
		deleteMany,
		pushInner,
		updateInner,
		removeInner,
		removeManyInner,
		pullInner
	};
};

export default makeDao;