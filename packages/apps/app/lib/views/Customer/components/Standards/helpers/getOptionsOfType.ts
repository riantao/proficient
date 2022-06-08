import { Option, OptionType } from "@proficient/types";

/**
 * @function getOptionsOfType
 * @param {OptionType} type 
 * @returns {(option: Option) => boolean}
 */
export const getOptionsOfType = (type: OptionType) => {
    const optionTypeFilter = (option: Option) => option.type === type;

    return optionTypeFilter;
};