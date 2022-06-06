import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { usePortal } from "./usePortal";

import type { PortalProps } from "./Portal.d";

const Portal: FC<PropsWithChildren<PortalProps>> = ({
	children,
	isOpen
}) => {
	const ref = usePortal();

	if (!isOpen || !ref.current)
		return null;

	return createPortal(children, ref.current);
};

export default Portal;