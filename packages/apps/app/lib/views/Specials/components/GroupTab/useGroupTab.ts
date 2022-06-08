import { useSpecials } from "../../../../services";
import type { GroupTabProps } from "./GroupTab.d";

export const useGroupTab = ({ special }: GroupTabProps) => {
    const url = special ? `/specials?beginsWith=${special.id}` : null;
    const { data: specials } = useSpecials(url);

    return {
        specials
    }
};