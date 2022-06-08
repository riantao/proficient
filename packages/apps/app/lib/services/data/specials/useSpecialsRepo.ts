import { Special, SpecialInfo } from "@proficient/types";

import type { ServicesDependencies } from "../../types";
import { useResourcesRepo } from "../../hooks";

export const useSpecialsRepo = ({
    httpClient,
    name,
    url,
    config
}: ServicesDependencies) => {
    const {
		error,
		createResource,
		fetchResource,
		updateResource
	} = useResourcesRepo<SpecialInfo, Special>({
		httpClient,
		name,
		url,
		config
	});

    return {
        error,
        createRemoteSpecial: createResource,
        fetchSpecials: fetchResource,
        updateRemoteSpecial: updateResource
    };
};