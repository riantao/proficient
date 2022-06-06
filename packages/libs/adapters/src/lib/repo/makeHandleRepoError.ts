import { errorLogger as logger } from "@proficient/functions";
// import { makeDispatchCriticalAdminNotice, EmailDispatchDependencies } from "@learnify/servers/features/emails";
import { InternalServerError } from "@proficient/exceptions";

// TODO: Migrate email dispatch to this lib

export const makeHandleRepoError = (deps: any /** EmailDispatchDependencies */) => {
	const handleRepoError = e => {
		// const dispatchCriticalAdminNotice = makeDispatchCriticalAdminNotice(deps);

		if (!e.statusCode) {
			// dispatchCriticalAdminNotice(e);
			logger.error(e);
			throw new InternalServerError(e);
		}
		else throw e;
	};

	return handleRepoError;
};