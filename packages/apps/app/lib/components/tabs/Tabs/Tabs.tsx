import { FC, useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { capitalize } from "@proficient/utils";

import { TabsPanel } from "../TabsPanel";
import { TabsContent } from "../TabsContent";

import { TabsProps } from "./Tabs.d";
import { Container } from "./Tabs.styles";

export const Tabs: FC<TabsProps> = ({
    labels,
    renderTabsContent
}) => {
    const [activeTab, setActiveTab] = useState(labels[0]);
    const router = useRouter();
    const [, originalTab] = router.asPath.split("#");

    /**
     * Change the select tab displaying to the user
     * @function handleTabClick
     * @param {Tab} tab
     * @returns {void}
     */
    const handleTabClick = useCallback((tab: string): void => {
        if(originalTab !== tab.toLowerCase())
            router.push(`#${tab.toLowerCase()}`);
        
        setActiveTab(tab);
    }, [originalTab, router]); 

    const tabs = labels.map(label => ({ 
        label, 
        onClick: handleTabClick, 
        activeTab
    }));

    useEffect(() => {
        if(router.asPath.includes("#"))             
            handleTabClick(capitalize(originalTab));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <TabsPanel tabs={tabs} onClick={handleTabClick} />
            <TabsContent>
                {renderTabsContent(activeTab)}
            </TabsContent>
        </Container>
    );
}

export default Tabs;