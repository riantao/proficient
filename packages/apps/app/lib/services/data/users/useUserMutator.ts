import useSWR from "swr";
import { useCookies } from "react-cookie";

import { UserInfo } from "@proficient/types";

import { httpClient } from "../../config";

import { useUserRepo } from "./useUserRepo";

const ID_TOKEN = "idToken";

export const useUserMutator = (url: string) => {
	const [{ idToken }] = useCookies([ID_TOKEN]);
    const key = idToken ? "/users" : null;

    const {
        createRemoteUser,
        error: writeError,
        getUserByEmail
    } = useUserRepo({
        url,
        httpClient,
        name: "USERS_ERROR",
    });

    const { 
        data = null,
        error: readError, 
        mutate 
    } = useSWR(key, getUserByEmail);

    /**
     * 
     * @param userInfo 
     * @returns 
     */
    const createUser = async (userInfo: UserInfo) => {
        const user = await createRemoteUser(userInfo);

        return mutate(user, false);
    };

    const error = writeError || readError;

    return {
        data,
        error,
        isLoading: !data && !error,
        createUser
    };
};