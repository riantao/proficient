import { FC, PropsWithChildren } from "react";

import { Page } from "../../templates";

import { SideNav as Nav } from "./SideNav"; 

import { NavigationContainer as Container } from "./Navigation.styles";

import { NavigationProps } from "./Navigation.d";

export const Navigation: FC<PropsWithChildren<NavigationProps>> = ({ children, ...props }) => (
    <Page {...props}>
        <Container>
            <Nav />
            {children}
        </Container>
    </Page>
);

export default Navigation;