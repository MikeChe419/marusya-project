import React, { FC, ReactNode, MouseEvent} from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.scss'

interface IModal {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Modal:FC<IModal> = ({children, isOpen, onClose}) => {

    if (!isOpen) return

    const handleClickOverlay = (e: MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return createPortal(
        <div className={styles.modalOverlay} onClick={handleClickOverlay}>
            <div className={styles.modalContent}>{children}</div>
        </div>,  document.body)
    

}

export default Modal