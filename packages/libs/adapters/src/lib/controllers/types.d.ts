interface HttpHeaders {
	[key: string]: string | string[] | undefined;
}

export interface ExpressFiles {
	[key: string]: Express.Multer.File[];
}

export interface DefaultParamDict {
	id?: string;
}

/**
 * @deprecated
 */
export interface IdToken {
	email: string;
	email_verified: boolean;
	iss: string;
	sub: string;
	aud: string;
	iat: number;
	exp: number;
}

export interface SignedCookies {
	accessToken?: string;
	idToken?: string;
}

export interface ControllerDependencies<Interactor> {
	interactor: Interactor;
	successStatusCode?: number;
	noErrorReturn?: boolean;
}

export type WriteControllerDependencies<Interator> = ControllerDependencies<Interator>;

export interface ReadControllerDependencies<Interator> extends ControllerDependencies<Interator> {
	paramKey?: string;
}