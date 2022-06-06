import { useRecoilState } from "recoil";

import { modalState } from "@proficient/components";

import { makeRenderTabsContent } from "../../renderers";
import type { ExplodedSpecialProps } from "./ExplodedSpecial.d";

export const useExplodedSpecial = ({ special }: ExplodedSpecialProps) => {
    const [, setIsOpen] = useRecoilState(modalState);

    const handleClose = () => setIsOpen(false);

    const renderTabsContent = makeRenderTabsContent(special);

    return {
        onClose: handleClose,
        renderTabsContent
    };
};