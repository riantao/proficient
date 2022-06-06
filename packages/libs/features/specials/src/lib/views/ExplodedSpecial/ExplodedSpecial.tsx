import { FC } from "react";

import { Tabs, Modal } from "@proficient/components";

import { TAB_LABELS } from "../../constants";

import { useExplodedSpecial } from "./useExplodedSpecial";
import type { ExplodedSpecialProps } from "./ExplodedSpecial.d";

export const ExplodedSpecial: FC<ExplodedSpecialProps> = ({
    special
}) => {
    const {
        onClose,
        renderTabsContent
    } = useExplodedSpecial({ special });

    return (
        <Modal>
            <Tabs labels={TAB_LABELS} renderTabsContent={renderTabsContent} />
            <button onClick={onClose}>Close</button>            
        </Modal>
    );
};

export default ExplodedSpecial;