import { FC, PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";

import Portal from "../Portal";
import Overlay from "../Overlay";

import { modalState } from "./modalState";
import { ModalDialog as Dialog } from "./Modal.styles";

export const Modal: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const isOpen = useRecoilValue(modalState);   

    return (
        <Portal isOpen={isOpen}>
            <Overlay>
                <Dialog open>
                    {children}
                </Dialog>
            </Overlay>
        </Portal>
    );
};

export default Modal;