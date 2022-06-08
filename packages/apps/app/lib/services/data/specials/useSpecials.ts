import { useSpecialsMutator } from "./useSpecialsMutator";

const KEY = "/specials";

export const useSpecials = (url: string | null = KEY) => 
    useSpecialsMutator(KEY, url);  