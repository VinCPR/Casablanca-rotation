import styles from "./index.module.css";
import React, { useState } from "react";
import Checkmark from "./assets/Checkmark";

interface Props {
  label?: string;
}

export default function Checkbox({ label = "" }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <>
      {!isChecked && (
        <button onClick={handleClick} className={styles.unchecked} value={label}></button>
      )}
      {isChecked && (
        <button onClick={handleClick} className={styles.checked} value={label}>
          <Checkmark />
        </button>
      )}
    </>
  );
}
