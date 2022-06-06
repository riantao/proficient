import { BadRequestError } from "@proficient/exceptions";
import { giveEntityId } from "./giveEntityId";
import * as BaseEntities from "./types.d";

/**
 * @function buildMakeEntity
 * @param {EntityDependencies} deps
 * @returns {(entity: EntityInfo) => Entity}
 */
export const buildMakeEntity = <
	EntityInfo,
	Entity,
	EntityDependencies extends BaseEntities.EntityDependencies<EntityInfo, Entity>
>({
	sanitizeEntityInfo,
	validator,
	initDefaultProps = giveEntityId as (info: EntityInfo) => Entity
}: EntityDependencies): ((entity: EntityInfo) => Entity) => {
	/**
	 * Factory for new entity
	 * @function makeEntity
	 * @param {EntityInfo} entityInfo
	 * @returns {Entity}
	 */
	const makeEntity = (entityInfo: EntityInfo): Entity => {
		const error = validator(entityInfo);

		if (error)
			throw new BadRequestError(error);

		const sanitizedEntityInfo = sanitizeEntityInfo(entityInfo);

		return initDefaultProps(sanitizedEntityInfo);
	};

	return makeEntity;
};

export default buildMakeEntity;