export interface ErrorDetails {
	id?: string;
	message: string;
}

export interface EnhancedError extends Error, ErrorDetails {
	statusCode: number;
}