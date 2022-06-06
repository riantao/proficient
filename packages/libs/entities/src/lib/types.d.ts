import { ErrorDetails } from "@proficient/exceptions";

export interface EntityDependencies<EntityInfo, Entity> {
	readonly validator: (info: EntityInfo) => ErrorDetails | null;
	readonly sanitizeEntityInfo: (info: EntityInfo) => EntityInfo;
	readonly initDefaultProps?: (info: EntityInfo) => Entity;
}