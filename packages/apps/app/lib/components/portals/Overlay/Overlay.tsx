import { FC, PropsWithChildren } from "react";

import { OverlaySheet } from "./Overlay.styles";

export const Overlay: FC<PropsWithChildren<unknown>> = ({ children }) => (
	<OverlaySheet>
		{children}
	</OverlaySheet>
);

export default Overlay;