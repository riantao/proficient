import { ReactNode } from "react";
import { TableFilterProps } from "../hooks";
import { Select } from "../styles";

/**
 * @function renderSelectFilter
 * @param {TableFilterProps} props 
 * @returns {ReactNode}
 */
export const renderSelectFilter = (props: TableFilterProps): ReactNode => <Select {...props} />;