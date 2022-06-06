import { TabProps } from "../Tab";

export interface TabsPanelProps {
    readonly tabs: TabProps[];
    readonly onClick?: (tab: string) => void;
}