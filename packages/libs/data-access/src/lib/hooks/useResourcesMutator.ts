import { useCallback } from "react";
import useSWR, { BareFetcher } from "swr";
import { PublicConfiguration } from "swr/dist/types";

import { UniqueId } from "@proficient/types";

import type { HttpError } from "../types";
import { replaceStaleResource } from "../utils";

/**
 * @function makeMutator
 * @param {string} key 
 * @returns {}
 */
 export const useResourcesMutator = <Request, Response extends UniqueId>(
	fetcher: BareFetcher<Response[]>,
	key?: string | null,
	config?: Partial<PublicConfiguration<Response[], any, BareFetcher<Response[]>>>
) => {
	const {
		data: resources = [],
		error: readError,
		mutate
	} = useSWR<Response[], HttpError | undefined>(key, fetcher, config);

	/**
	 * Factory that supplies mutation with createResource handler
	 * @param {(resourceInfo: Request) => Promise<Response | void>} createResource
	 * @returns {Promise}
	 */
	const makeAddResource = useCallback((
		createRemoteResource: (resourceInfo: Request) => Promise<Response | void>
	) => {
		/**
		 * Mutation that adds new resource to data
		 * @param {Request} resourceInfo 
		 * @returns 
		 */
		const addResource = async (resourceInfo: Request) => {
			const resource = await createRemoteResource(resourceInfo);

			if (!resource)
				return resources;

			const data = [...resources, resource];

			// if (key)
				// localStorage.setItem(key, JSON.stringify(data));

			return mutate(data);
		};

		return addResource;
	}, [resources, mutate]);

	const makeMutateResource = useCallback((
		updateRemoteResource: (resourceInfo: Request) => Promise<Response | void>
	) => {
		const mutateResource = async (resourceInfo: Request) => {
			const resource = await updateRemoteResource(resourceInfo);

			if (!resource)
				return resources;

			const data = resources.map(replaceStaleResource(resource));

			// if (key)
				// localStorage.setItem(key, JSON.stringify(data));

			return mutate(data);
		};

		return mutateResource;
	}, [resources, mutate]);

	/**
	 * 
	 * @param deleteResource 
	 * @returns 
	 */
	const makeRemoveEmbeddedResource = useCallback((
		deleteRemoteResource: (id: string) => Promise<Response | void>
	) => {
		/**
		 * 
		 * @param id 
		 * @returns 
		 */
		const removeEmbeddedResource = async (id: string) => {
			const resource = await deleteRemoteResource(id);

			if (!resource)
				return resources;

			const data = resources.map(replaceStaleResource(resource));

			// if (key)
			// 	localStorage.setItem(key, JSON.stringify(data));

			return mutate(data);
		};

		return removeEmbeddedResource;
	}, [resources, mutate]);

	/**
	 * @param {(id: string) => Promise<void>} deleteRemoteResource
	 */
	const makeRemoveResource = useCallback((
		deleteRemoteResource: (id: string) => Promise<void>
	) => {
		const removeResource = async (id: string) => {
			const outResourceWithId = (res: Response): boolean => res.id !== id;

			await deleteRemoteResource(id);

			const data = resources.filter(outResourceWithId);

			// if (key)
				// localStorage.setItem(key, JSON.stringify(data));

			return mutate(data);
		};

		return removeResource;
	}, [resources, mutate]);

	return {
		makeAddResource,
		makeMutateResource,
		makeRemoveEmbeddedResource,
		makeRemoveResource,
		data: resources,
		readError,
		mutate
	};
};