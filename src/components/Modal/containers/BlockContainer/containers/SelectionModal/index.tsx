import styles from "./index.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  isOpened: boolean;
  toggle: () => void;
  heading: string;
}

export default function SelectionModal({
  children,
  isOpened,
  toggle,
  heading = "",
}: Props) {
  return (
    <>
      {isOpened && (
        <>
          <div className={styles.darkBG} onClick={() => toggle()} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>{heading}</div>
              <div className={styles.modalContainer}>{children}</div>
              <div className={styles.actionsContainer}>
                <button className={styles.addBtn} onClick={() => toggle()}>Add</button>
                <button className={styles.closeBtn} onClick={() => toggle()}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
  