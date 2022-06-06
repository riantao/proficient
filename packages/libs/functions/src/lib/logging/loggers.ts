import { transports, format, createLogger } from "winston";
import expressWinston from "express-winston";

export const modelLogger = createLogger({
	level: "info",
	transports: [
		new transports.Console(),
		new transports.File({
			level: "error",
			dirname: "logs",
			filename: "models.log"
		})
	],
	format: format.combine(
		format.colorize(),
		format.json()
	)
});

export const routeLogger = expressWinston.logger({
	level: "info",
	transports: [
		new transports.Console()
	],
	format: format.combine(
		format.colorize(),
		format.json()
	)
});

export const clientLogger = expressWinston.errorLogger({
	level: "error",
	transports: [
		new transports.File({
			level: "error",
			dirname: "logs",
			filename: "client-errors.log"
		})
	],
	format: format.combine(
		format.colorize(),
		format.json()
	)
});

export const routerErrorLogger = expressWinston.errorLogger({
	level: "error",
	transports: [
		new transports.File({
			dirname: "logs",
			filename: "route-errors.log"
		})
	],
	format: format.combine(
		format.colorize(),
		format.json()
	)
});

export const errorLogger = createLogger({
	transports: [
		new transports.Console(),
		new transports.File({
			filename: "errors.log",
			dirname: "logs",
			level: "error"
		})
	],
	format: format.combine(
		format.errors({ stack: true }),
		format.colorize(),
		format.timestamp(),
		format.json()
	)
});

export const internalLogger = createLogger({
	transports: [
		new transports.Console(),
		new transports.File({ filename: "errors.log" })
	],
	format: format.combine(
		format.colorize(),
		format.json()
	)
});