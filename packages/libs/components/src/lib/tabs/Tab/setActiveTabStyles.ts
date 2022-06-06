import type { TabItemProps } from "./Tab.d";

/**
 * @function setActiveTabStyles
 * @param {TabItemProps} tabItem
 * @returns {string}
 */
export const setActiveTabStyles = ({ $isActive }: TabItemProps): string => {
    if(!$isActive)
        return "";

    return `
        background-color: #FFF;
        border: solid #CCC;
        border-radius: 2px 2px 0 0;
        border-width: 1px 1px 0 1px;
    `;
}