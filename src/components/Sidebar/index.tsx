import styles from "./index.module.css";
import React from "react";
import IconDesignRotation from "./containers/IconDesignRotation";
import IconRotationPlan from "./containers/IconRotationPlan";
import IconStudentList from "./containers/IconStudentList";
import IconFacultyList from "./containers/IconFacultyList";

type Props = {
  highlight: number;
};

export default function SideBar({ highlight }: Props) {
  return (
    <div className={styles.sideBarContainer}>
      <button className={highlight !== 1 ? styles.button : styles.highlight}>
        <div className={styles.line} />
        <div className={styles.textfield}>
          <IconDesignRotation isActive={highlight === 1} />
          <div className={styles.text}>Rotation Plan</div>
        </div>
      </button>
      <button className={highlight !== 2 ? styles.button : styles.highlight}>
        <div className={styles.line} />
        <div className={styles.textfield}>
          <IconRotationPlan isActive={highlight === 2} />
          <div className={styles.text}>Rotation Plan</div>
        </div>
      </button>
      <button className={highlight !== 3 ? styles.button : styles.highlight}>
        <div className={styles.line} />
        <div className={styles.textfield}>
          <IconStudentList isActive={highlight === 3} />
          <div className={styles.text}>Student List</div>
        </div>
      </button>
      <button className={highlight !== 4 ? styles.button : styles.highlight}>
        <div className={styles.line} />
        <div className={styles.textfield}>
          <IconFacultyList isActive={highlight === 4} />
          <div className={styles.text}>Faculty List</div>
        </div>
      </button>
    </div>
  );
}
