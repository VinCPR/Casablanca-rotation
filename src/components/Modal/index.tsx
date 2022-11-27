import { ReactNode } from "react";
import styles from "./index.module.css";

interface Props {
  children?: ReactNode;
  isOpened: boolean;
  toggle: () => void;
}

export default function Modal(props: Props) {
  return (
    <>
      {props.isOpened && (
        <>
          <div className={styles.darkBG} onClick={() => props.toggle()} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>Heading</div>
              <div className={styles.modalContent}>{props.children}</div>
              <button
                className={styles.closeBtn}
                onClick={() => props.toggle()}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
