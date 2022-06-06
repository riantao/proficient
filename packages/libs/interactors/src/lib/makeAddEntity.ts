import { ConflictError, ErrorDetails } from "@proficient/exceptions";
import * as BaseEntities from "@proficient/types";
import { EntityRepo } from "@proficient/adapters";

import type { InteractorAddDependencies } from "./types";

export const makeAddConflictErrorMessage = (name: string): ErrorDetails => ({
	message: `The server found a ${name?.toLowerCase()} that is already registered with this id`
});

/**
 * @function makeAddAssessment
 * @param {InteractorDependencies<AssessmentOdm>} deps
 * @returns {Promise<Document | null>}
 */
export const makeAddEntity = <
	EntityInfo extends BaseEntities.EntityInfo,
	Entity extends BaseEntities.Entity,
	EntityDocument,
	EntityOdm extends EntityRepo<Entity, EntityDocument>
>({
	entityRepo,
	makeEntity,
	name
}: InteractorAddDependencies<EntityInfo, Entity, EntityDocument, EntityOdm>) => {
	/**
	 * @function addEntity
	 * @param {Entity} entityInfo
	 * @returns {Promise<EntityDocument>}
	 */
	const addEntity = async (entityInfo: EntityInfo): Promise<EntityDocument> => {
		if (entityInfo.id)
			throw new ConflictError(makeAddConflictErrorMessage(name));

		const entity = makeEntity(entityInfo);

		const entityDocument = await entityRepo.create(entity);

		return entityDocument;
	};

	return addEntity;
};

export default makeAddEntity;