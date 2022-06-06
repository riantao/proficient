import { Filter } from "mongodb";
import * as BaseEntities from "@proficient/types";
import * as BaseInteractor from "@proficient/adapters";

export interface InterfactorFetchDependencies<Entity extends BaseEntities.Entity, Query> {
	readonly name: string;
	readonly findById: (id: string, filter?: Filter<Entity>) => Promise<Entity[] | null>;
	readonly querySanitizer?: (query?: Query) => Filter<Entity>;
}

export interface InteractorDependencies<
	Entity,
	EntityDocument,
	EntityRepo extends BaseInteractor.EntityRepo<Entity, EntityDocument>
	> {
	readonly entityRepo: EntityRepo;
	readonly name: string;
}

export interface InteractorAddDependencies<
	EntityInfo,
	Entity,
	EntityDocument,
	EntityRepo extends BaseInteractor.EntityRepo<Entity, EntityDocument>
	> extends InteractorDependencies<Entity, EntityDocument, EntityRepo> {
	readonly makeEntity: (entityInfo: EntityInfo) => Entity;
}

export interface InteractorUpdateDependencies<
	EntityInfo,
	Entity,
	EntityDocument,
	EntityRepo extends BaseInteractor.EntityRepo<Entity, EntityDocument>
	> extends InteractorAddDependencies<
	EntityInfo,
	Entity,
	EntityDocument,
	EntityRepo
	> {
	readonly getEntityFromDoc?: (doc: EntityDocument) => Entity;
}