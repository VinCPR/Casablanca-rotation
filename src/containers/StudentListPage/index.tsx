import * as React from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import SideBar from "../../components/Sidebar";
import StudentListMainContent from "./StudentListMainContent";
import styles from "./index.module.css"

export default function StudentListPage() {
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBar highlight={3} />
        <div className={styles.mainContainer}>
            <div className = {styles.header}>STUDENT LIST</div>
            <StudentListMainContent/>
        </div>
      </div>
    </>
  );
}
