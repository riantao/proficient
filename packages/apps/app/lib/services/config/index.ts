import { makeHttpClient } from "./makeHttpClient";

export const httpClient = makeHttpClient({
	baseURL: process.env["NEXT_PUBLIC_API_URL"]
});