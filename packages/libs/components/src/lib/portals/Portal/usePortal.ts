import { MutableRefObject } from "react";
import { useEffect, useRef } from "react";

import { PORTAL_ROOT_SELECTOR } from "./PORTAL_ROOT_SELECTOR";

/**
 * 
 * @returns {MutableRefObject<Element | null>}
 */
export const usePortal = () : MutableRefObject<Element | null>=> {
	const ref = useRef<Element | null>(null);

	useEffect(() => {
		const portalRoot = document.querySelector(PORTAL_ROOT_SELECTOR);

		ref.current = portalRoot;
	}, []);

	return ref;
};