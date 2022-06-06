import { Application, Router } from "express";

/**
 * Add router to app instance
 * @param {Application} app app instance
 * @param {string} urlPrefix url prefix of router endpoints
 * @returns {(router: Router) => Application}
 */
export const makeCallRouter = (app: Application): ((router: Router) => Application) => {
	const callRouter = (router: Router): Application => app.use("/v1", router);

	return callRouter;
};

export default makeCallRouter;