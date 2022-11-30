import styles from "./index.module.css";
import React, { useState } from "react";
import Checkmark from "./assets/Checkmark";

interface Props {
  label?: string;
  checked?: boolean;
}

export default function Checkbox({ label = "", checked = false }: Props) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleClick() {
    setIsChecked((prevState) => !prevState);
    console.log({label, isChecked})
  }

  return (
    <>
      {!isChecked && (
        <div onClick={handleClick} className={styles.unchecked}></div>
      )}
      {isChecked && (
        <div onClick={handleClick} className={styles.checked}>
          <Checkmark />
        </div>
      )}
    </>
  );
}
