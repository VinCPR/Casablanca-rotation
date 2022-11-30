import styles from "./index.module.css";
import React from "react"

export default function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      
      <button>
        <div className={styles.line}></div>
        <div className={styles.space}></div>
        Design Rotation</button>
      <button ><div className={styles.line}></div>Rotation Plan</button>
      <button ><div className={styles.line}></div>Student List</button>
      <button ><div className={styles.line}></div>Faculty List</button>
    </div>
  );
}
