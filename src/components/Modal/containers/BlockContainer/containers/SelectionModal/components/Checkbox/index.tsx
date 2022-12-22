import styles from "./index.module.css";
import React, { useState } from "react";
import Checkmark from "./assets/Checkmark";
import TrashIcon from "./assets/TrashIcon";

interface Props {
  label?: string;
  onClick: (event: any) => void;
  checked: boolean;
  checkedAfterClose: boolean;
}

export default function Checkbox({
  label,
  onClick,
  checked,
  checkedAfterClose,
}: Props) {
  const [isChecked, setIsChecked] = useState(checked);
  const [isCheckedAfterClose, setIsCheckedAfterClose] =
    useState(checkedAfterClose);

  function switchState() {
    setIsChecked((prevState) => !prevState);
  }

  function switchStateAfterClose() {
    if (isChecked && !isCheckedAfterClose) {
      setIsCheckedAfterClose((prevState) => !prevState);
    }
  }

  function handleClick(event: any) {
    switchState();
    switchStateAfterClose();
    onClick(event);
  }

  return (
    <>
      {!isChecked && (
        <button
          onClick={handleClick}
          className={styles.unchecked}
          value={label}
        ></button>
      )}
      {isChecked && !isCheckedAfterClose && (
        <button onClick={handleClick} className={styles.checked} value={label}>
          <div className={styles.svg}>
            <Checkmark />
          </div>
        </button>
      )}
      {isChecked && isCheckedAfterClose && (
        <button
          onClick={handleClick}
          className={styles.checkedAfterClose}
          value={label}
        >
          <div className={styles.overlay}>
            <div className={styles.svg}>
              <TrashIcon />
            </div>
          </div>
        </button>
      )}
    </>
  );
}
