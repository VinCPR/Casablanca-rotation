import * as React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import FacultyListMainContent from "./FacultyListMainContent";
import styles from "./index.module.css";

export default function FacultyListPage() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBar highlight={4} />
        <div className={styles.mainContainer}>
          <div className={styles.header}>FACULTY LIST</div>
          <FacultyListMainContent />
        </div>
      </div>
    </>
  );
}
