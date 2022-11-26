import { ReactNode } from "react";
import styles from "./index.module.css";

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalProps) {
  return (
    <>
      {props.isOpen && (
        <>
          <div className={styles.darkBG} onClick={() => props.toggle()} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>Heading</h5>
              </div>
              <div className={styles.modalContent}>{props.children}</div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button
                    className={styles.closeBtn}
                    onClick={() => props.toggle()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
