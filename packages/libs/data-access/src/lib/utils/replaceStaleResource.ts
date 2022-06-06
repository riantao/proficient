import { UniqueId } from "@proficient/types";

/**
 * @function replaceStaleResource
 * @param {Response} resource 
 * @returns {(res: Response) => Response}
 */
export const replaceStaleResource = <Response extends UniqueId>(resource: Response) => {
	const replaceResource = (res: Response): Response => {
		if (!resource)
			return res;

		if (res?.id === resource.id)
			return resource;

		return res;
	};

	return replaceResource;
};