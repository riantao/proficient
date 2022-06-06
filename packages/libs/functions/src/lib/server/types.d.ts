import { CookieOptions } from "express";

export interface HttpRequest<
	RequestBody = Record<string, never>,
	RequestParams = DefaultParamDict,
	RequestQuery = Record<string, unknown>
	> {
	body: RequestBody;
	files?: ExpressFiles | Express.Multer.File[] | undefined;
	cookies: HttpHeaders;
	signedCookies: SignedCookies;
	headers: HttpHeaders;
	ip: string;
	method: string;
	params: RequestParams;
	path: string;
	query: RequestQuery;
}

export interface HttpPreResponse {
	clearCookie: (name: string, options?: CookieOptions) => void;
	cookie: (name: string, value: string, options: CookieOptions) => void;
}

export interface HttpResponse<ResponseBody = null> {
	headers?: HttpHeaders;
	statusCode: number;
	body: ResponseBody;
}