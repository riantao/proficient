import { FC, PropsWithChildren } from "react";

import { TabsContentContainer as Container } from "./TabsContent.styles";

export const TabsContent: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
    <Container role="tabpanel">
        {children}
    </Container>
);