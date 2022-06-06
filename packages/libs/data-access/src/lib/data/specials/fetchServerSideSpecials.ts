import { httpClient } from "../../config";
import { Special } from "@proficient/types";

export const fetchServerSideSpecials = async (): Promise<Special[]> => {
    try {
        const res = await httpClient.get("/specials");

        return res.data;
    } catch(e) {
        return [];
    }
};