import { ReactNode } from "react";
import { StandardsTableHeader as Th } from "../Standards.styles";

/**
 * Render empty td element for padding the table
 * @function renderEmptyCell
 * @returns {ReactNode}
 */
export const renderEmptyCell = (): ReactNode => <Th></Th>;