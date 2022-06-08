import { ReactNode } from "react";

/**
 * @function renderTableHeader
 * @param {string} h 
 * @returns {ReactNode}
 */
export const renderTableHeader = (h: string): ReactNode => <th key={h}>{h}</th>;