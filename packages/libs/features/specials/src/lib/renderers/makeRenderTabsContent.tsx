import { Special } from "@proficient/types";
import { AttachmentsTab, OverviewTab, PricingTab, GroupTab } from "../components";

export const makeRenderTabsContent = (special: Special | null) => {
    const renderTabsContent = (activeTab: string) => {
        switch(activeTab) {
            case "Overview":
                return <OverviewTab special={special} />;
            case "Pricing":
                return <PricingTab special={special} />;
            case "Group":
                return <GroupTab special={special} />; 
            case "Attachments":
                return <AttachmentsTab special={special}/>;
            case "Other":
                return <div>Other content</div>
            default:
                throw new Error("Invalid tab label");
        }
    };

    return renderTabsContent;
};  