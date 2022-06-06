import { Customer } from "@proficient/types";
import { makeRenderTabsContent } from "../renderers";

export const useCustomer = (customer: Customer) => {
    const renderTabsContent = makeRenderTabsContent(customer);

    return {
        renderTabsContent  
    };
};