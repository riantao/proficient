export interface TabProps {
    readonly label: string;
    readonly activeTab: string;
    readonly onClick?: (tab: string) => void;
}

export interface TabItemProps {
    readonly $isActive: boolean;
}