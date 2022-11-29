import styles from "./index.module.css";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <h4 >Design Rotation</h4>
      <h4 >Rotation Plan</h4>
      <h4 >Student List</h4>
      <h4 >Faculty List</h4>
    </div>
  );
}