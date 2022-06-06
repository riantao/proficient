import { Special, SpecialInfo } from "@proficient/types";

import { httpClient } from "../../config";
import { useResourcesMutator } from "../../hooks";

import { useSpecialsRepo } from "./useSpecialsRepo";

export const useSpecialsMutator = (url: string, key?: string | null) => {

    const {
        error: writeError,
        createRemoteSpecial,
        fetchSpecials,
        updateRemoteSpecial
    } = useSpecialsRepo({
        httpClient,
        url,
        name: "SPECIALS_ERROR"
    })

    const {
        readError,
        data,
        makeAddResource,
        makeMutateResource
    } = useResourcesMutator<SpecialInfo, Special>(fetchSpecials, key);

    const createSpecial = makeAddResource(createRemoteSpecial);
    const updateSpecial = makeMutateResource(updateRemoteSpecial);

    const error = writeError || readError;

	return {
		data,
		error,
		isLoading: !data && !error,
		createSpecial,
		updateSpecial
	};
};