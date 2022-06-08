import { ReactNode } from "react";
import { Entity } from "@proficient/types";

/**
 * @function renderProjectItem
 * @param {Entity} project
 * @returns {ReactNode} 
 */
export const renderProjectItem = ({ id, title }: Entity): ReactNode => (
    <li key={id}>
        <b>{id}</b>; <i>{title}</i>
    </li>
);