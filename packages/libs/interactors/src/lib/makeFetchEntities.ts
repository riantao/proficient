import { NotFoundError } from "@proficient/exceptions";
import * as BaseEntities from "@proficient/types";
import type { InterfactorFetchDependencies } from "./types";

/**
 * 
 * @param paramName name of resource whose foreign key is used to fetch documents
 * @param resourceName name of resouce being fetched
 * @param findById ODM method used to fetch documents
 * @returns {(id: string) => Promise<EntityDocument[] | null>}
 */
export const makeFetchEntities = <Entity extends BaseEntities.Entity, Query>({
	findById,
	name,
	querySanitizer
}: InterfactorFetchDependencies<Entity, Query>): ((id?: string) => Promise<Entity[] | null>) => {
	/**
	 * @function fetchEntities
	 * @param id foreign key used to fetch documents
	 * @returns {Promise<EntityDocument[] | null>}
	 */
	const fetchEntities = async (id?: string, query?: Query): Promise<Entity[] | null> => {
		if (!id)
			throw new NotFoundError({ message: `Could not find ${name} on the server`});

		const documents = await findById(id, querySanitizer?.(query));

		return documents;
	};

	return fetchEntities;
};

export default makeFetchEntities;