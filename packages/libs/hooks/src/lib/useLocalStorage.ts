import { useState } from "react";

interface LocalStorageDeps<T, E = void> {
    readonly key: string;
    readonly initialValue: T;
    readonly errorHandler?: (error: unknown) => E;
}

/**
 * Get and parse the initial value from local storage
 * @function initializeValueFromStorage
 * @param {string} key 
 * @param {T} initialValue 
 * @returns {T}
 */
const initializeValueFromStorage = <T>(
    key: string, 
    initialValue: T
): T => {
    try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);

        // Parse stored json or if none return initialValue
        if(!item)
            return initialValue;

        return JSON.parse(item);
    } catch (error) {
        // If error also return initialValue
        return initialValue;
    }
};

/**
 * Interact with localStorage through hook
 * @function useLocalStorage
 * @param {LocalStorageDeps} deps
 * @returns {[T, (value: T) => void]}
 */
export const useLocalStorage = <T, E = void>({
    key,
    initialValue,
    errorHandler
}: LocalStorageDeps<T, E>): [T, (value: T) => void, () => void] => {
    const [storedValue, setStoredValue] = useState<T>(initializeValueFromStorage(key, initialValue));

    /**
     * Set new value for stored key
     * @function setValue
     * @param {T} value
     * @returns {void} 
     */
    const setValue = (value: T): void => {
        try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = value instanceof Function ? 
                value(storedValue) : 
                value;

			setStoredValue(valueToStore);

			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error: unknown) {
			errorHandler?.(error);
		}
    };

    /**
     * 
     * @function removeValue 
     */
    const removeValue = (): void => {   
        try {
            window.localStorage.removeItem(key);
        } catch (error: unknown) {
			errorHandler?.(error);
		}
    };

    return [storedValue, setValue, removeValue];
};

export default useLocalStorage;