import styles from "./index.module.css";
import React, { useState } from "react";
import Checkmark from "./assets/Checkmark";

interface Props {
  label?: string;
  onClick: (event: any) => void;
  checked: boolean;
}

export default function Checkbox({ label, onClick, checked }: Props) {
  const [isChecked, setIsChecked] = useState(checked);

  function switchState() {
    setIsChecked((prevState) => !prevState);
  }

  function handleClick(event: any) {
    switchState();
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
      {isChecked && (
        <button onClick={handleClick} className={styles.checked} value={label}>
          <div className={styles.svg}>
            <Checkmark />
          </div>
        </button>
      )}
    </>
  );
}
