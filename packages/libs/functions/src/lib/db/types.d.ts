import { UniqueId } from "@proficient/types";
import {
	DeleteResult,
	UpdateResult,
	Document,
	Filter,
	IndexDescription,
	InsertManyResult,
	InsertOneResult,
	MatchKeysAndValues,
	ModifyResult,
	OnlyFieldsOfType,
	OptionalUnlessRequiredId,
	PullOperator,
	PushOperator,
	Sort,
	WithId
} from "mongodb";

export type CollectionOptions =
	"customers" |
	"projects" |
	"specials" |
	"users";

export interface CollectionDependencies {
	readonly name: CollectionOptions;
	readonly validator: Document;
	readonly indexes?: IndexDescription[];
}

export interface Dao<T extends UniqueId> {
	readonly insertOne: (entity: OptionalUnlessRequiredId<T>) => Promise<InsertOneResult<T>>;
	readonly insertMany: (entities: OptionalUnlessRequiredId<T>[]) => Promise<InsertManyResult<T>>;
	readonly findById: (id: string, projection?: Document) => Promise<WithId<T> | null>;
	readonly findAll: (query?: Filter<T>, opts?: DaoQueryDependencies) => Promise<WithId<T>[]>;
	readonly findBy: (query?: Filter<T>, projection?: Document) => Promise<WithId<T> | null>;
	readonly updateOne: (entity: T) => Promise<WithId<T> | null>;
	readonly updateMany: (filter: Filter<T>, $set: MatchKeysAndValues<T>) => Document | UpdateResult;
	readonly deleteOne: (id: string) => Promise<ModifyResult<T>>;
	readonly deleteMany: (filter: Filter<T>) => Promise<DeleteResult>;
	readonly pushInner: (filter: Filter<T> | string, $push: PushOperator<T>) => Promise<WithId<T> | null>;
	readonly updateInner: (filter: Filter<T>, $set: MatchKeysAndValues<T>) => Promise<WithId<T> | null>;
	readonly removeInner: (filter: Filter<T>, $unset: OnlyFieldsOfType<T, unknown, "" | true | 1>) => Promise<WithId<T> | null>;
	readonly removeManyInner: (filter: Filter<T>, $unset: OnlyFieldsOfType<T, unknown, "" | true | 1>) => Promise<Document | UpdateResult>;
	readonly pullInner: (filter: Filter<T> | string, $pull: PullOperator<T>) => Promise<WithId<T> | null>;
}

export interface DaoQueryDependencies {
	readonly sort?: Sort;
	readonly limit?: number;
	readonly projection?: Document;
}