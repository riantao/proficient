import { ReactNode } from "react";
import { Special } from "@proficient/types";
import {
    TableData as Td,
    TableRow as Tr
} from "../styles";
import { truncateDescription } from "../helpers";
import { renderProjectItem } from "./renderProjectItem";

/**
 * Render a special as a table row
 * @function makeRenderSpecial
 * @param {(special: Special) => () => void} makeOnClick
 * @returns {(special: Special) => ReactNode}
 */
export const makeRenderSpecial = (makeOnClick: ((special: Special) => () => void)) => {
    /**
     * @function renderSpecial
     * @param {Special} special 
     * @returns {ReactNode}
     */
    const renderSpecial = (special: Special): ReactNode => {
        const onClick = makeOnClick(special);

        return (
            <Tr key={special.id} role="row" onClick={onClick}>
                <Td>
                    <div>{special.id}</div>
                </Td>
                <Td>
                    <div>{special.title}</div>
                </Td>
                <Td>
                    <div>{truncateDescription(special.description)}</div>
                </Td>
                <Td>
                    <ul>{special.projects.map(renderProjectItem)}</ul>
                </Td>
            </Tr>
        );
    };

    return renderSpecial;
};