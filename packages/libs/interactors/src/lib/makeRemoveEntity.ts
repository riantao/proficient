import type { EntityRepo } from "@proficient/adapters";
import { NotFoundError } from "@proficient/exceptions";

import type { InteractorDependencies } from "./types";

/**
 * @function makeRemoveEntity
 * @param {ServicesDependencies<EntityOdm>} deps
 * @returns {(id: string) => Promise<boolean>}
 */
export const makeRemoveEntity = <
	Entity,
	EntityDocument,
	EntityOdm extends EntityRepo<Entity, EntityDocument>
>({
	entityRepo,
	name
}: InteractorDependencies<Entity, EntityDocument, EntityOdm>): ((id: string) => Promise<void>) => {
	/**
	 * @function removeEntity
	 * @param {string} id
	 * @returns {Promise<void>}
	 */
	const removeEntity = async (id: string): Promise<void> => {
		if (!id)
			throw new NotFoundError({ message: `${name} id was not found` });

		return await entityRepo.remove(id);
	};

	return removeEntity;
};

export default makeRemoveEntity;