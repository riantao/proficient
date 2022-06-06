import { useCallback, useState } from "react";
import { AxiosError } from "axios";

import type { HttpError, ServicesDependencies } from "../../types";
import { makeHandleHttpError } from "../../utils";
import { User, UserInfo } from "@proficient/types";

export const useUserRepo = ({
    httpClient,
    name,
    url,
    config
}: ServicesDependencies) => {
    const [error, setError] = useState<HttpError | null>(null);
    const handleHttpError = makeHandleHttpError(name);

    const createRemoteUser = useCallback(async (user: UserInfo): Promise<User | null> => {
        try {
            const res = await httpClient.post<User>(url, user, config);

            return res.data;
        } catch(e) {
            setError(handleHttpError(e as AxiosError<HttpError>));
            return null;
        }
    }, [config, handleHttpError, httpClient, url]);

    const getUserByEmail = useCallback(async (id: string): Promise<User | null> => {
        try {
            const res = await httpClient.get<User>(`${url}/${id}`, config);

            return res.data;
        } catch(e) {
            setError(handleHttpError(e as AxiosError<HttpError>));
            return null;
        }
    }, [config, handleHttpError, httpClient, url]);

    return {
        error,
        createRemoteUser,
        getUserByEmail
    };
};