import { AxiosInstance, AxiosRequestConfig } from "axios";
import { UniqueId } from "@proficient/types";

export interface ServicesDependencies {
	readonly httpClient: AxiosInstance;
	readonly url: string;
	readonly name: string;
	readonly config?: AxiosRequestConfig;
}

export interface ResourceRepo<Request extends Partial<UniqueId>, Response, DeleteResponse = void> extends Services {
	readonly createResource: (info: Request) => Promise<Response | void>;
	readonly fetchResource: (url: string) => Promise<Response[]>
	readonly updateResource: (info: Request) => Promise<Response | void>;
	readonly deleteResource: (id: string) => Promise<DeleteResponse | void>;
}

export interface HttpError extends Error {
	readonly id?: string;
	readonly statusCode: number;
}

export interface Mutator<D> {
	readonly isLoading: boolean;
	readonly data: D;
}

export interface Services {
	readonly error?: HttpError;
}