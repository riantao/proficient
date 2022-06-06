import { NotFoundError } from "@proficient/exceptions";
import * as BaseEntities from "@proficient/types";
import type { EntityRepo } from "@proficient/adapters";
import type { InteractorUpdateDependencies } from "./types";

/**
 * @function makeUpdateEntity
 * @param {InteractorDependencies<EntityOdm>} deps
 * @returns {(newEntityInfo: EntityInfo) => Promise<Entity>}
 */
export const makeUpdateEntity = <
	EntityInfo extends BaseEntities.EntityInfo,
	Entity,
	EntityDocument,
	EntityOdm extends EntityRepo<Entity, EntityDocument>
>(
	{
		entityRepo,
		makeEntity,
		name,
		getEntityFromDoc
	}: InteractorUpdateDependencies<EntityInfo, Entity, EntityDocument, EntityOdm>
): ((newEntityInfo: EntityInfo) => Promise<EntityDocument>) => {
	/**
	 * @function updateEntity
	 * @param {string} id 
	 * @param {EntityInfo} entityInfo 
	 * @returns {Promise<Entity>}
	 */
	const updateEntity = async (entityInfo: EntityInfo): Promise<EntityDocument> => {
		if (!entityInfo.id)
			throw new NotFoundError({ message: `${name} id was not found` });

		const existingDoc = await entityRepo.getById(entityInfo.id);

		const existingEntity = getEntityFromDoc?.(existingDoc);

		const entity = makeEntity({ ...existingEntity, ...entityInfo });

		const entityDocument = await entityRepo.update(entity);

		return entityDocument;
	};

	return updateEntity;
};

export default makeUpdateEntity;