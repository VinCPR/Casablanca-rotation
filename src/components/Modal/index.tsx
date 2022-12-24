import * as React from "react";
import OptionSelector from "./containers/BlockContainer/OptionSelector";
import Output from "./containers/BlockContainer/Output";
import styles from "./index.module.css";

interface Props {
  children?: React.ReactNode;
  isOpened: boolean;
  toggle: () => void;
  heading: string;
  data: OptionSelector;
}

export default function Modal({
  children,
  isOpened,
  toggle,
  heading = "",
}: Props) {
  const [showPreview, setShowPreview] = React.useState(false);
  const outputs = [
    {
      departments: {
        Pediatrics: 7,
        Neurology: 3,
      },
      hospitals: {
        Vinmec: 4,
        "108 Hospital": 3,
        Hehe: 3,
      },
      services: {
        Impatient: 4,
        Outpatient: 3,
        Neurology: 3,
      },
    },
    {
      departments: {
        Neurology: 3,
        Pediatrics: 7,
      },
      hospitals: {
        Hehe: 3,
        Vinmec: 4,
        "108 Hospital": 3,
      },
      services: {
        Neurology: 3,
        Impatient: 4,
        Outpatient: 3,
      },
    },
  ];
  return (
    <>
      {isOpened && (
        <>
          <div className={styles.darkBG} onClick={() => toggle()} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              {!showPreview ? (
                <>
                  <div className={styles.modalHeader}>{heading}</div>
                  <div className={styles.modalContainer}>{children}</div>
                  <div className={styles.actionsContainer}>
                    <button
                      className={styles.previewBtn}
                      onClick={() => setShowPreview(true)}
                    >
                      Preview
                    </button>
                    <button
                      className={styles.closeBtn}
                      onClick={() => toggle()}
                    >
                      Close
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/**TODO: draw the preview */}
                  <div className={styles.modalHeader}>Preview</div>
                  {outputs.map((output, index) => {
                    return (
                      <div key={index} className={styles.previewContainer}>
                        <div>Group {index}</div>
                        <div>Week </div>
                      </div>
                    );
                  })}
                  <button onClick={() => setShowPreview(false)}>HEHE</button>;
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
