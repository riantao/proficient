import { useCallback, useState } from "react";
import type { Entity, UniqueId } from "@proficient/types";
import type { HttpError, ResourceRepo, ServicesDependencies } from "../types";
import { makeHandleHttpError } from "../utils";

/**
 * @function useResourcesRepo
 * @param {ServiceDependencies} deps
 * @returns {ResourceRepo<Request, Response, DeleteResponse>}
 */
export const useResourcesRepo = <
	Request extends Partial<UniqueId>,
	Response extends Entity,
	DeleteResponse extends Response | void = void
>({
	httpClient,
	config,
	url,
	name
}: ServicesDependencies): ResourceRepo<Request, Response, DeleteResponse> => {
	const [error, setError] = useState<HttpError | undefined>(undefined);
	const handleHttpError = makeHandleHttpError(name);

	// TODO: Add logging
	const createResource = useCallback(async (info: Request, cb?: (data: Response) => void): Promise<Response | void> => {
		try {
			const res = await httpClient.post<Response>(url, info, config);

			cb?.(res.data);
			return res.data;
		} catch (e: any) {
			return setError(handleHttpError(e));
		}
	}, [config, handleHttpError, httpClient, url]);

	const fetchResource = useCallback(async (url: string): Promise<Response[]> => {
		try {
			// const storedDataString = localStorage.getItem(url);

			// if (storedDataString) {
			// 	const storedData = JSON.parse(storedDataString);

			// 	return storedData || [];
			// }

			const res = await httpClient.get<Response[]>(url, config);

			return res.data || [];
		} catch (e: any) {
			setError(handleHttpError(e));
			return [];
		}
	}, [config, handleHttpError, httpClient, setError]);

	const updateResource = useCallback(async (
		info: Request,
		cb?: (data: Response) => void
	): Promise<Response | void> => {
		try {
			const res = await httpClient.put<Response>(`${url}/${info.id}`, info, config);

			cb?.(res.data);

			return res.data;
		} catch (e: any) {
			return setError(handleHttpError(e));
		}
	}, [config, handleHttpError, httpClient, url]);

	const deleteResource = useCallback(async (id: string, cb?: (data: DeleteResponse) => void): Promise<DeleteResponse | void> => {
		try {
			const res = await httpClient.delete<DeleteResponse>(`${url}/${id}`, config);

			cb?.(res.data);

			return res.data;
		} catch (e: any) {
			return setError(handleHttpError(e));
		}
	}, [config, handleHttpError, httpClient, url]);

	return Object.freeze({
		error,
		createResource,
		fetchResource,
		updateResource,
		deleteResource
	});
};