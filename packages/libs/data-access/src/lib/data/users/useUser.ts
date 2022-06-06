import { useUserMutator } from "./useUserMutator";

/**
 * @function useUser
 * @returns 
 */
export const useUser = () => useUserMutator("/users");