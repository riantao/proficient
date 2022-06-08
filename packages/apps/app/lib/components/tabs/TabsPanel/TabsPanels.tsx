import { FC } from "react";

import { TabProps, Tab } from "../Tab";
import { TabsPanelProps } from "./TabsPanel";

import { List } from "./TabsPanel.styles";

const renderTab = (tab: TabProps) => <Tab key={tab.label} {...tab} />;

export const TabsPanel: FC<TabsPanelProps> = ({ tabs }) => (
    <List role="tablist">
        {tabs.map(renderTab)}
    </List>
);

export default TabsPanel;