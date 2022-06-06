import type { Sort } from "mongodb";
import type { UniqueId } from "@proficient/types";
import type { Dao } from "@proficient/functions";

export interface EntityRepo<Entity, Document = Entity> {
	readonly create: (entity: Entity) => Promise<Document>;
	readonly getById: (id: string) => Promise<Document>;
	readonly update: (entity: Entity) => Promise<Document>;
	readonly remove: (id: string) => Promise<void>;
}

export interface RepoDependencies<T extends UniqueId, D extends Dao = Dao<T>> {
	readonly dao: D;
	readonly sort?: Sort;
	readonly projection?: Record<string, number>;
}