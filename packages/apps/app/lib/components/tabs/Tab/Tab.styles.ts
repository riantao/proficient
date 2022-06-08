import styled from "styled-components";
import { setActiveTabStyles } from "./setActiveTabStyles";
import type { TabItemProps } from "./Tab.d";

export const TabItem = styled.li<TabItemProps>`
    display: inline-block;
    cursor: pointer;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 0.75rem;
    ${setActiveTabStyles}
`;