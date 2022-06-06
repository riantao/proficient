import { ReactNode } from "react";

export interface TabsProps {
    readonly labels: string[];
    readonly renderTabsContent: (activeTab: string) => ReactNode;
}